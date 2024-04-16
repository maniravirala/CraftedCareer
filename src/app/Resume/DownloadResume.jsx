import { message } from "antd";
import { useState } from "react";
import Links from "../../assets/links";
import Template2 from "../../components/Templates/Template2";
import { useFormData } from "../../contexts/Data/FormDataContext";
import { renderToStaticMarkup } from "react-dom/server";

 function App() {
  const { formData } = useFormData();
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);
  const [payload, setPayload] = useState({
    html: sampleHtml,
  });

  const setHtml = (value) => {
    setPayload({ ...payload, html: value });
  };

  const getHtml = () => {
    const html = renderToStaticMarkup(<Template2 formData={formData} />);
    console.log(html);
    setHtml(html);
    download();
  }


  const download = async () => {
    setDownloading(true);
    try {
      const response = await requestDownload(payload);
      if (response.error) {
        setError(response.error);
        setDownloading(false);
      }
      if (response.requestId) {
        const onComplete = (error = "") => {
          setError(error);
          setDownloading(false);
        };
        downloadWithRetry(response.requestId, onComplete);
      }
    } catch (error) {
      setError("Something went wrong.");
      setDownloading(false);
    }
  };

  const btnText = downloading ? "Downloading..." : `Download`;

  return (
    <div>
      <button
        onClick={getHtml}
        className="bg-primary-light dark:bg-primary-dark rounded-lg p-4 py-2 text-black dark:text-white"
      >
        {btnText}
      </button>
      {error && <p style={{ textAlign: "center" }}>{error}</p>}
      <div>
        <textarea
          style={{ padding: "1rem", marginTop: "1rem" }}
          rows={25}
          cols={80}
          value={payload.html}
          onChange={(e) => setHtml(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;

function downloadToBrowser(blob) {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = new Date().toISOString() + "." + blob.type.split("/")[1];
  document.body.appendChild(a);
  a.click();
  a.remove();
}

async function requestDownload(payload) {
  const response = await fetch(Links.API.REQUEST_PDF, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}

const RETRY_INTERVAL_MS = 2500;
const MAX_RETRIES = 4;

async function downloadWithRetry(requestId, onComplete) {
  let retried = 0;
  const intervalId = setInterval(async () => {
    const response = await fetch(
      Links.API.RETRY_PDF.replace(":requestId", requestId)
    );
    if (response.ok) {
      const blob = await response.blob();
      clearInterval(intervalId);
      downloadToBrowser(blob);
      onComplete();
    } else {
      retried++;
      if (retried >= MAX_RETRIES) {
        clearInterval(intervalId);
        onComplete("Download failed.");
        message.error("Download failed.");
      }
      console.error("Download failed, retrying...");
    }
  }, RETRY_INTERVAL_MS);
}

const sampleHtml = `
<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover" src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512">
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400 font-bold">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
`;

const dynamicTemplate = {
  html: `
<div class="p-10">
  <div class="max-w-4xl mx-auto bg-white p-5">
      <header class="flex justify-between mb-10">
          <div>
              <h1 class="text-xl font-bold">{{businessName}}</h1>
              <p>{{businessAddress}}</p>
              <p>Email: {{businessEmail}}</p>
              <p>Phone: {{businessPhone}}</p>
          </div>
          <div>
              <h2 class="text-lg font-bold">Invoice</h2>
              <p>Invoice Number: {{invoiceNumber}}</p>
              <p>Date: {{invoiceDate}}</p>
              <p>Due Date: {{dueDate}}</p>
          </div>
      </header>
      <section class="mb-5">
          <h3 class="font-bold text-lg mb-3">Bill To:</h3>
          <p>{{clientName}}</p>
          <p>{{clientAddress}}</p>
      </section>
      <table class="min-w-full table-auto">
          <thead>
              <tr class="bg-gray-200">
                  <th class="px-4 py-2 text-left">Item</th>
                  <th class="px-4 py-2 text-left">Quantity</th>
                  <th class="px-4 py-2 text-left">Price</th>
                  <th class="px-4 py-2 text-left">Total</th>
              </tr>
          </thead>
          <tbody>
              {{#each items}}
              <tr>
                  <td class="border px-4 py-2">{{name}}</td>
                  <td class="border px-4 py-2">{{quantity}}</td>
                  <td class="border px-4 py-2">{{price}}</td>
                  <td class="border px-4 py-2">{{total}}</td>
              </tr>
              {{/each}}
          </tbody>
      </table>
      <div class="text-right mt-4">
          <strong>Total Due: {{totalDue}}</strong>
      </div>
      <footer class="mt-5">
          <p>Payment Terms: {{paymentTerms}}</p>
          <p>Thank you for your business!</p>
      </footer>
  </div>
</div>
  `,
  data: {
    businessName: "Your Company Name",
    businessAddress: "123 Business Rd, Business City, BC 12345",
    businessEmail: "contact@yourcompany.com",
    businessPhone: "+1 234 567 8900",
    invoiceNumber: "2023-001",
    invoiceDate: "April 10, 2024",
    dueDate: "May 10, 2024",
    clientName: "Client Co.",
    clientAddress: "789 Client St, Client City, CC 67890",
    items: [
      { name: "Widget", quantity: 4, price: "$10.00", total: "$40.00" },
      { name: "Gadget", quantity: 2, price: "$15.00", total: "$30.00" },
      { name: "Doohickey", quantity: 1, price: "$20.00", total: "$20.00" },
    ],
    totalDue: "90.00",
    paymentTerms: "Net 30",
  },
};
