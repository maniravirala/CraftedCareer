import React, { useRef } from "react";
import Template1 from "../../components/Templates/Template1";
import Template2 from "../../components/Templates/Template2";
import Template3 from "../../components/Templates/Template3";

const DownloadResume = () => {
  const formData = JSON.parse(localStorage.getItem("formData"));
  const selectedTemplate = localStorage.getItem("selectedTemplate");

  const TemplateComponent = {
    Template1: Template1,
    Template2: Template2,
    Template3: Template3,
  }[selectedTemplate];

  // return <TemplateComponent formData={formData} />;
  const handleDownload = () => {
    const selectedTemplate = localStorage.getItem("selectedTemplate");
    if (!selectedTemplate) {
      console.error("Selected template not found");
      return;
    }

    // Assuming `selectedTemplate` contains the URL of the PDF file
    window.open(selectedTemplate, "_blank");
  };

  return (
    <div>
      <TemplateComponent formData={formData} />
    </div>
  );
}
export default DownloadResume;
