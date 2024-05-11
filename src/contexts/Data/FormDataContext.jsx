import React, { useState, useEffect, useContext } from "react";

const FormDataContext = React.createContext();

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData");
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          personalInfo: {
            name: "",
            email: "",
            phone: "",
            address: "",
            linkedin: "",
            github: "",
            position: "",
          },
          profilePic: "",
          technicalSkills: [],
          certifications: [],
          extraCurricularActivities: [],
          internships: [],
          summerTraining: [],
          projects: [],
          achievements: [],
          education: [],
          visibility: { 
            certifications: true,
            extraCurricularActivities: true,
            internships: true,
            summerTraining: true,
            projects: true,
            achievements: true,
          },
          settings: {
            fontSize: "12",
            fontFamily: "Poppins",
            titleCase: "Uppercase",
            pageMargins: "24",
            lineHeight: "8",
          },
        };
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e, section, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData };
      if (section === "personalInfo") {
        updatedData[section][name] = value;
      } else {
        updatedData[section] = value;
      }
      return updatedData;
    });
  };

  const handleProfilePic = (url) => {
    setFormData((prevData) => ({
      ...prevData,
      profilePic: url,
    }));
  };

  const handleVisibility = (section) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        visibility: {
          ...prevData.visibility,
          [section]: !prevData.visibility[section]
        }
      };
    });
  };
  
  const getFontSizeClass = () => {
    if (formData.settings.fontSize <= 12) return 'text-xs';
    else if (formData.settings.fontSize <= 14) return 'text-sm';
    else if (formData.settings.fontSize <= 16) return 'text-base';
    else if (formData.settings.fontSize <= 18) return 'text-lg';
    else if (formData.settings.fontSize <= 20) return 'text-xl';
    else return 'text-xs';
  };
  
  const getHeadingFontSizeClass = () => {
    if (formData.settings.fontSize <= 12) return 'text-sm';
    else if (formData.settings.fontSize <= 14) return 'text-base';
    else if (formData.settings.fontSize <= 16) return 'text-lg';
    else if (formData.settings.fontSize <= 18) return 'text-xl';
    else if (formData.settings.fontSize <= 20) return 'text-2xl';
    else return 'text-sm';
  }

  const getLineHeightClass = () => {
    if (formData.settings.lineHeight === 0) return 'gap-0';
    else if (formData.settings.lineHeight <= 2) return 'gap-0.5';
    else if (formData.settings.lineHeight <= 4) return 'gap-1';
    else if (formData.settings.lineHeight <= 6) return 'gap-1.5';
    else if (formData.settings.lineHeight <= 8) return 'gap-2';
    else if (formData.settings.lineHeight <= 10) return 'gap-2.5';
    else if (formData.settings.lineHeight <= 12) return 'gap-3';
    else if (formData.settings.lineHeight <= 14) return 'gap-3.5';
    else if (formData.settings.lineHeight <= 16) return 'gap-4';
    else if (formData.settings.lineHeight <= 18) return 'gap-[1.125rem]';
    else if (formData.settings.lineHeight <= 20) return 'gap-5';
    else return 'gap-2';
  }

  const getPageMarginClass = () => {
    if (formData.settings.pageMargins <= 12) return 'p-3';
    else if (formData.settings.pageMargins <= 14) return 'p-3.5';
    else if (formData.settings.pageMargins <= 16) return 'p-4';
    else if (formData.settings.pageMargins <= 20) return 'p-5';
    else if (formData.settings.pageMargins <= 24) return 'p-6';
    else if (formData.settings.pageMargins <= 28) return 'p-7';
    else if (formData.settings.pageMargins <= 32) return 'p-8';
    else if (formData.settings.pageMargins <= 36) return 'p-9';
    else if (formData.settings.pageMargins <= 40) return 'p-10';
    else return 'p-6';
  }

  const getFontFamilyClass = () => {
    switch (formData.settings.fontFamily) {
      case "Arial":
        return "'Arial', 'sans-serif'";
      case "Courier New":
        return "'Courier New', 'monospace'";
      case "Poppins":
        return "'Poppins', 'sans-serif'";
      case "Times New Roman":
        return "'Times New Roman', 'serif'";
      case "Verdana":
        return "'Verdana', 'sans-serif'";
      default:
        return "'Poppins', 'sans-serif'";
    }
  };

  const getTitleCaseClass = () => {
    switch (formData.settings.titleCase) {
      case "Uppercase":
        return "uppercase";
      case "Lowercase":
        return "lowercase";
      case "Capitalize":
        return "capitalize";
      default:
        return "uppercase";
    }
  };

  return (
    <FormDataContext.Provider
      value={{ formData, handleChange, handleProfilePic, handleVisibility, getFontSizeClass, getHeadingFontSizeClass, getLineHeightClass, getPageMarginClass, getFontFamilyClass, getTitleCaseClass }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContext;
