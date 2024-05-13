import React, { createContext, useEffect, useState, useContext } from "react";

export const TemplateOrderContext = createContext();

export const useTemplateOrder = () => {
    return useContext(TemplateOrderContext);
    };

export const TemplateOrderProvider = ({ children }) => {
  const [templateOrder, setTemplateOrder] = useState(() => {
    const savedTemplateOrder = localStorage.getItem("templateOrder");
    return savedTemplateOrder
      ? JSON.parse(savedTemplateOrder)
      : {
          template2: [
            { id: 1, component: "Internships" },
            { id: 2, component: "SummerTraining" },
            { id: 3, component: "Projects"},
            { id: 4, component: "Achievements" },
            { id: 5, component: "Certifications" },
            { id: 6, component: "Skills" },
            { id: 7, component: "Education" },
          ],
        };
  });

  useEffect(() => {
    localStorage.setItem("templateOrder", JSON.stringify(templateOrder));
  }, [templateOrder]);

  const updateTemplateOrder = (newOrder) => {
    setTemplateOrder(newOrder);
  };

  return (
    <TemplateOrderContext.Provider
      value={{ templateOrder, updateTemplateOrder }}
    >
      {children}
    </TemplateOrderContext.Provider>
  );
};
