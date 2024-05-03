import React, { useState, useEffect } from "react";
import Form from "../Pages/Form";
import Preview from "../Pages/Preview";
import LeftSectionChanger from "../Pages/LeftSectionChanger";
import FloatBtnResume from "./FloatBtnResume";

const Resume = () => {
  const [currentSection, setCurrentSection] = useState(() => {
    const savedSection = localStorage.getItem("currentSection");
    return savedSection || "personalInfo";
  });

  const savedSection = localStorage.getItem("currentSection");
  useEffect(() => {
    if (!savedSection) {
      localStorage.setItem("currentSection", "personalInfo");
    }
  }, [savedSection]);


  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto text-background-dark dark:text-gray-300 ">
      {" "}
      {/* bg-background dark:bg-background-dark */}
      <div className="flex">
      <div className="sm:flex hidden items-center ">
          <LeftSectionChanger
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
        </div>
        <div
          className="sm:grid h-[calc(100vh-4rem)] w-full"
          // style={{ gridTemplateColumns: "1fr 210mm" }}
          style={{ gridTemplateColumns: "1fr 2fr" }}
        >
          <div className="sm:col-span-1 overflow-y-auto">
            <Form currentSection={currentSection} />
          </div>
          <div className="sm:col-span-1 overflow-y-auto">
            <Preview />
          </div>
        </div>
      </div>
      <FloatBtnResume />
    </div>
  );
};

export default Resume;
