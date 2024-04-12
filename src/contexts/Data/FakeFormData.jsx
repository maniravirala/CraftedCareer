import React, { useState, createContext, useContext, useEffect } from 'react';

const ResumeDataContext = createContext();

export const useResumeData = () => {
  return useContext(ResumeDataContext);
};

const ResumeDataProvider = ({ children }) => {
  const [resumeData, setResumeDataState] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      github: '',
      position: '',
    },
    profilePic: '',
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
    }
  });

  const setResumeData = (newData) => {
    setResumeDataState(newData);
    localStorage.setItem('resumeData', JSON.stringify(newData));
  };

  useEffect(() => {
    const storedData = localStorage.getItem('resumeData');
    if (storedData) {
      setResumeDataState(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e, section, index) => {
    const { name, value } = e.target;
    if (section === 'personalInfo') {
      setResumeData({
        ...resumeData,
        personalInfo: {
          ...resumeData.personalInfo,
          [name]: value,
        },
      });
    } else {
      const newItems = [...resumeData[section]];
      newItems[index][name] = value;
      setResumeData({
        ...resumeData,
        [section]: newItems,
      });
    }
  };


  const contextValue = {
    resumeData,
    setResumeData,
    handleChange,
  };

  return (
    <ResumeDataContext.Provider value={contextValue}>
      {children}
    </ResumeDataContext.Provider>
  );
};

export default ResumeDataProvider;
