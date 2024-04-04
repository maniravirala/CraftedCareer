import React, { useState, useEffect } from "react";

const FormData = () => {
    const [formData, setFormData] = useState(() => {
        const savedFormData = localStorage.getItem("formData");
        return savedFormData ? JSON.parse(savedFormData) : {
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
            updatedData[section]= value;
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

    return { formData, handleChange, handleProfilePic };
}

export default FormData;
