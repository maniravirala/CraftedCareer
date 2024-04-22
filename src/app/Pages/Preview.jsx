import React, { useEffect, useState } from "react";
import Template1 from "../../components/Templates/Template1";
import Template2 from "../../components/Templates/Template2";
import Template3 from "../../components/Templates/Template3";
import DropDownMani from "../../components/Inputs/DropDownMani";

const Preview = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    const storedTemplate = localStorage.getItem("selectedTemplate");
    return storedTemplate || "Template1";
  });

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

  useEffect(() => {
    localStorage.setItem("selectedTemplate", selectedTemplate);
  }, [selectedTemplate]);

  const handleTemplateChange = (value) => {
    setSelectedTemplate(value);
  };

  return (
    <div>
      <DropDownMani
        className="h-full w-full rounded-lg outline-none"
        optionsClassName="h-full w-full "
        handleChange={handleTemplateChange} // Ensure this is correctly set
        value={selectedTemplate}
        options={[
          { value: "Template1", label: "Template 1" },
          { value: "Template2", label: "Template 2" },
          { value: "Template3", label: "Template 3" },
        ]}
      />
      <div className="mt-8">
        <TemplateComponent />
      </div>
    </div>
  );
};

export default Preview;
