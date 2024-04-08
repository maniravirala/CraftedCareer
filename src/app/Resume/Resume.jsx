import React, { useState, useEffect } from "react";
import Form from "../Pages/Form";
import Preview from "../Pages/Preview";
import LeftSectionChanger from "../Pages/LeftSectionChanger";

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

  return (
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
  );
};

export default Resume;
