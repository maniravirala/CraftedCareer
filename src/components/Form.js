import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCode, faFile, faAward, faBriefcase, faBookOpen, faProjectDiagram, faTrophy, faGraduationCap, faAddressCard } from "@fortawesome/free-solid-svg-icons";

import PersonalInfo from "./sections/PersonalInfo";
import ProfilePic from "./sections/ProfilePic";
import TechnicalSkills from "./sections/TechnicalSkills";
import Certifications from "./sections/Certifications";
import ExtraCurricularActivities from "./sections/ExtraCurricularActivities";
import Internships from "./sections/Internships";
import SummerTraining from "./sections/SummerTraining";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";

const Form = ({ formData, handleChange, handleProfilePic }) => {
  const [currentSection, setCurrentSection] = useState(() => {
    const savedSection = localStorage.getItem("currentSection");
    return savedSection || "personalInfo";
  });

  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const savedSection = localStorage.getItem("currentSection");
    if (!savedSection) {
      localStorage.setItem("currentSection", "personalInfo");
    }
  }, []);

  const handleSectionChange = (section) => {
    setHoveredSection(null);  // Close tooltip on section change
    setCurrentSection(section);
    localStorage.setItem("currentSection", section);
  };

  const sections = [
    { name: "Personal Info", icon: faUser, key: "personalInfo" },
    { name: "Profile Pic", icon: faAddressCard, key: "profilePic" },
    { name: "Technical Skills", icon: faCode, key: "technicalSkills" },
    { name: "Certifications", icon: faFile, key: "certifications" },
    { name: "Extra Curricular Activities", icon: faAward, key: "extraCurricularActivities" },
    { name: "Internships", icon: faBriefcase, key: "internships" },
    { name: "Summer Training", icon: faBookOpen, key: "summerTraining" },
    { name: "Projects", icon: faProjectDiagram, key: "projects" },
    { name: "Achievements", icon: faTrophy, key: "achievements" },
    { name: "Education", icon: faGraduationCap, key: "education" },
  ];

  const handleMouseEnter = (sectionKey) => {
    setHoveredSection(sectionKey);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };
 
  return (
    <div className="my-8">
      <div className="flex h-[80vh] ">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex flex-col h-full justify-between">
            {sections.map((section) => (
              <div
                key={section.key}
                className={`p-3 my-1 cursor-pointer hover:bg-primary text-[#6a778e] hover:text-white rounded-lg relative flex justify-center ${currentSection === section.key ? 'bg-primary text-white' : ''}`}

                onClick={() => handleSectionChange(section.key)}
                onMouseEnter={() => handleMouseEnter(section.key)}
                onMouseLeave={handleMouseLeave}
              >
                <FontAwesomeIcon icon={section.icon} className="h-4" />
                  {hoveredSection === section.key && (
                    <span className="absolute z-[9999] left-full top-0 ml-4 bg-primary text-white px-4 py-2 rounded whitespace-nowrap shadow-md">
                      {section.name}
                    </span>
                  )}
              </div>
            ))}
          </div>
        </div>
        <div className=" overflow-auto max-h-[80vh] w-full mr-2">
          {currentSection === "personalInfo" && <PersonalInfo formData={formData} handleChange={handleChange} />}
          {currentSection === "profilePic" && <ProfilePic formData={formData} handleProfilePic={handleProfilePic} />}
          {currentSection === "technicalSkills" && <TechnicalSkills formData={formData} handleChange={handleChange} />}
          {currentSection === "certifications" && <Certifications formData={formData} handleChange={handleChange} />}
          {currentSection === "extraCurricularActivities" && <ExtraCurricularActivities formData={formData} handleChange={handleChange} />}
          {currentSection === "internships" && <Internships formData={formData} handleChange={handleChange} />}
          {currentSection === "summerTraining" && <SummerTraining formData={formData} handleChange={handleChange} />}
          {currentSection === "projects" && <Projects formData={formData} handleChange={handleChange} />}
          {currentSection === "achievements" && <Achievements formData={formData} handleChange={handleChange} />}
          {currentSection === "education" && <Education formData={formData} handleChange={handleChange} />}
          
        </div>
      </div>
    </div>
  );
};

export default Form;
