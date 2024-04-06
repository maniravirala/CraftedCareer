import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCode,
  faFile,
  faAward,
  faBriefcase,
  faBookOpen,
  faProjectDiagram,
  faTrophy,
  faGraduationCap,
  faAddressCard,
  faGear
} from "@fortawesome/free-solid-svg-icons";

const LeftSectionChanger = ({ currentSection, setCurrentSection }) => {

  const [hoveredSection, setHoveredSection] = useState(null);

  const handleSectionChange = (section) => {
    setHoveredSection(null); // Close tooltip on section change
    setCurrentSection(section);
    localStorage.setItem("currentSection", section);
  };

  const sections = [
    { name: "Personal Info", icon: faUser, key: "personalInfo" },
    { name: "Profile Pic", icon: faAddressCard, key: "profilePic" },
    { name: "Technical Skills", icon: faCode, key: "technicalSkills" },
    { name: "Certifications", icon: faFile, key: "certifications" },
    {
      name: "Extra Curricular Activities",
      icon: faAward,
      key: "extraCurricularActivities",
    },
    { name: "Internships", icon: faBriefcase, key: "internships" },
    { name: "Summer Training", icon: faBookOpen, key: "summerTraining" },
    { name: "Projects", icon: faProjectDiagram, key: "projects" },
    { name: "Achievements", icon: faTrophy, key: "achievements" },
    { name: "Education", icon: faGraduationCap, key: "education" },
    { name: "Settings", icon: faGear, key: "settings" },
  ];

  const handleMouseEnter = (sectionKey) => {
    setHoveredSection(sectionKey);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex flex-col h-full justify-between">
        {sections.map((section) => (
          <div
            key={section.key}
            className={`p-3 my-1 cursor-pointer hover:bg-primary text-[#6a778e] hover:text-white rounded-lg relative flex justify-center ${
              currentSection === section.key ? "bg-primary text-white" : ""
            }`}
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
  );
};

export default LeftSectionChanger;
