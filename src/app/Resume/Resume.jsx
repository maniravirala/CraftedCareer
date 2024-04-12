import React, { useState, useEffect } from "react";
import Form from "../Pages/Form";
import Preview from "../Pages/Preview";
import LeftSectionChanger from "../Pages/LeftSectionChanger";
import { FloatButton } from "antd";
import {
  PlusOutlined,
  CloudDownloadOutlined,
  CloudUploadOutlined,
  DownloadOutlined,
  ClearOutlined,
} from "@ant-design/icons";

const Resume = () => {
  const [currentSection, setCurrentSection] = useState(() => {
    const savedSection = localStorage.getItem("currentSection");
    return savedSection || "personalInfo";
  });

  useEffect(() => {
    const savedSection = localStorage.getItem("currentSection");
    if (!savedSection) {
      localStorage.setItem("currentSection", "personalInfo");
    }
  }, []);
  
  const handleJSONUpload = (e) => {
    const file = document.createElement("input");
    file.type = "file";
    file.accept = ".json";
    file.click();
    file.onchange = (e) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        // const data = JSON.parse(e.target.result);
        const data = e.target.result;
        localStorage.setItem("formData", data);
        window.location.reload();
      };
      reader.readAsText(e.target.files[0]);
    };
  }

  const handleJSONDownload = () => {
    const json = localStorage.getItem("formData");
    // const json = JSON.stringify(data);
    const url = URL.createObjectURL(new Blob([json], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.json";
    a.click();
    URL.revokeObjectURL(url);
  };
  
  const handlePDFDownload = () => {
    const data = localStorage.getItem("formData");
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); // Add parentheses here
    a.href = url;
    a.download = "resume.pdf";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    localStorage.removeItem("formData");
    window.location.reload();
  }  

  return (
    <>
      <div className="flex">
        <div className="flex items-center ">
          <LeftSectionChanger
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
        </div>
        <div
          className="grid h-[89vh] w-full"
          // style={{ gridTemplateColumns: "1fr 210mm" }}
          style={{ gridTemplateColumns: "1fr 2fr" }}
        >
          <div className="col-span-1 overflow-y-auto">
            <Form currentSection={currentSection} />
          </div>
          <div className="col-span-1 overflow-y-auto">
            <Preview />
          </div>
        </div>
      </div>

      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{
          right: 24,
          bottom: 20,
        }}
        icon={<PlusOutlined />}
      >
        <FloatButton icon={<CloudDownloadOutlined />} onClick={handleJSONDownload} />
        <FloatButton icon={<CloudUploadOutlined />} onClick={handleJSONUpload} />
        <FloatButton icon={<DownloadOutlined />} onClick={handlePDFDownload} />
        <FloatButton icon={<ClearOutlined />} onClick={handleClear} />
      </FloatButton.Group>
    </>
  );
};

export default Resume;
