import { message, Spin } from "antd";
import { useState } from "react";
import Links from "../../assets/links";
import Template1 from "../../components/Templates/Template1";
import Template2 from "../../components/Templates/Template2";
import Template3 from "../../components/Templates/Template3";
import { FormDataProvider } from "../../contexts/Data/FormDataContext";
import { renderToStaticMarkup } from "react-dom/server";

const DownloadResume = () => {
  // const { formData } = useFormData();
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);
  const selectedTemplate = useState(
    localStorage.getItem("selectedTemplate") || "Template 1"
  )[0];

  const TemplateComponent = () => {
    switch (selectedTemplate) {
      case "Template 1":
        return <Template1 />;
      case "Template 2":
        return <Template2 />;
      case "Template 3":
        return <Template3 />;
      default:
        return <Template1 />;
    }
  };

  function downloadToBrowser(blob) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = new Date().toISOString() + "." + blob.type.split("/")[1];
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function downloadPdf(url) {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        downloadToBrowser(blob);
        setDownloading(false);
      })
      .catch((error) => {
        console.error("Error downloading PDF:", error);
        message.error("An error occurred while downloading the PDF");
        setDownloading(false);
      });
  }

  async function GetDownloadUrl() {
    try {
      setDownloading(true);
      // const html = renderToStaticMarkup(<Template2 formData={formData} />);
      const html = renderToStaticMarkup(
        <FormDataProvider>
          <TemplateComponent />
        </FormDataProvider>
      );
      const response = await fetch(Links.API.GENERATE_PDF, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ html }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        message.error(data.error);
        setDownloading(false);
        return;
      }
      setTimeout(() => {
        downloadPdf(data.downloadUrl);
      }, 6000);
    } catch (error) {
      console.error("Error generating PDF:", error);
      message.error("An error occurred while generating the PDF");
      setDownloading(false);
    }
  }

  const btnText = downloading ? `Downloading...` : `Download Resume`;

  return (
    <div>
      <button
        onClick={GetDownloadUrl}
        className="bg-primary-light dark:bg-primary-dark rounded-lg p-4 py-2 text-black dark:text-white"
      >
        {btnText}
      </button>

      {downloading && <Spin fullscreen />}

      {error && <p style={{ textAlign: "center" }}>{error}</p>}
      <div></div>
    </div>
  );
};

export default DownloadResume;
