import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { message } from "antd";
import { FormDataProvider } from "../../contexts/Data/FormDataContext";
import Template1 from "../../components/Templates/Template1";

const DownloadResume = () => {
  // const selectedTemplate =
  //   localStorage.getItem("selectedTemplate") || "Template1";

  const getTemplateHtml = () => {
    // const templateMap = {
    //   Template1,
    //   Template2,
    //   Template3,
    // };
    // const TemplateComponent = templateMap[selectedTemplate];
    // return ReactDOMServer.renderToStaticMarkup(<TemplateComponent />);
    // return renderToStaticMarkup(
    //   <FormDataProvider>
    //   <Template1 />
    // </FormDataProvider>
    // );

    const html = renderToStaticMarkup(
      <FormDataProvider>
        <Template1 />
      </FormDataProvider>
    );
    return html;
  };

  const generatePdf = async () => {
    try {
      const response = await fetch("http://localhost:5000/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          html: getTemplateHtml(), // Pass the HTML content as the body
        }),
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        message.error("An error occurred while generating the PDF");
      }
    } catch (error) {
      message.error("An error occurred while generating the PDF");
      console.error(error);
    }
  };

  return (
    <div className="h-screen overflow-auto">
      <div id="resume">
        <Template1 />
      </div>
      <button onClick={generatePdf}>Generate PDF</button>
    </div>
  );
};

export default DownloadResume;
