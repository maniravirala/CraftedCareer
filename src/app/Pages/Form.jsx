import React from "react";

import PersonalInfo from "../../components/sections/PersonalInfo";
import ProfilePic from "../../components/sections/ProfilePic";
import TechnicalSkills from "../../components/sections/TechnicalSkills";
import Certifications from "../../components/sections/Certifications";
import ExtraCurricularActivities from "../../components/sections/ExtraCurricularActivities";
import Internships from "../../components/sections/Internships";
import SummerTraining from "../../components/sections/SummerTraining";
import Projects from "../../components/sections/Projects";
import Achievements from "../../components/sections/Achievements";
import Education from "../../components/sections/Education";
import Settings from "../../components/sections/Settings";

const Form = ({ currentSection }) => {
  return (
    <div className="h-full ml-2">
      <div className="flex h-full">
        <div className=" overflow-auto w-full mr-2 h-full"> {/*  max-h-[80vh] */}
          {currentSection === "personalInfo" && <PersonalInfo />}
          {currentSection === "profilePic" && <ProfilePic />}
          {currentSection === "technicalSkills" && <TechnicalSkills />}
          {currentSection === "certifications" && <Certifications />}
          {currentSection === "extraCurricularActivities" && <ExtraCurricularActivities />}
          {currentSection === "internships" && <Internships />}
          {currentSection === "summerTraining" && <SummerTraining />}
          {currentSection === "projects" && <Projects />}
          {currentSection === "achievements" && <Achievements />}
          {currentSection === "education" && <Education />}
          {currentSection === "settings" && <Settings />}
          
        </div>
      </div>
    </div>
  );
};

export default Form;
