import React, { useState } from "react";
import {
  BiPlusCircle, 
  BiMap,
  BiPopsicle,
  BiSolidSchool,
  BiCalendar,
} from "react-icons/bi";
import Input from "../Inputs/Input";
import TextAreaMani from "../Inputs/TextAreaMani";
import { Switch } from "antd"; 

import { useFormData } from "../../contexts/Data/FormDataContext";

const Internships = () => {
  const { formData, handleChange, handleVisibility } = useFormData();

  const [internships, setInternships] = useState(formData.internships || []);

  const handleInternshipChange = (e, internshipIndex) => {
    const updatedInternships = [...internships];
    const name = e.target.name.split("-")[0];
    updatedInternships[internshipIndex][name] = e.target.value;
    setInternships(updatedInternships);
    handleChange(
      { target: { name: "internships", value: updatedInternships } },
      "internships"
    );
  };
  
  const addInternship = () => {
    setInternships([
      ...internships,
      { company: "", position: "", location: "", date: "", experience: "" },
    ]);
  };

  const removeInternship = (index) => {
    const updatedInternships = [...internships];
    updatedInternships.splice(index, 1);
    setInternships(updatedInternships);
    handleChange(
      { target: { name: "internships", value: updatedInternships } },
      "internships"
    );
  };

  const handleToggle = () => {
    handleVisibility("internships");
  };

  return (
    <div className="h-full pt-8">
      <div className="flex items-center justify-between w-full p-3 gap-8">
        <h2 className="text-xl font-semibold">Internships</h2>
        <div className="flex gap-4">
          <Switch
            defaultChecked
            onChange={handleToggle}
            value={formData.visibility.internships}
            style={{ backgroundColor: formData.visibility.internships ? "#58d68d" : "#ec7063" }}
          />
          <button
            type="button"
            onClick={addInternship}
            className="flex items-center gap-2 text-primary dark:text-primary-dark font-semibold focus:outline-none"
          >
            <BiPlusCircle
              className="inline-block"
              size="1.5rem"
              // onClick={addInternship}
            />
          </button>
        </div>
      </div>
      <div>
        {internships.map((internship, internshipIndex) => (
          <div
            key={internshipIndex}
            className="flex flex-col w-full p-5 gap-8"
          >
            <Input
              label="Company"
              name={`company-${internshipIndex}`}
              value={internship.company}
              onChange={(e) => handleInternshipChange(e, internshipIndex)}
              decoration={
                <BiSolidSchool size="1rem" className="text-gray-400" />
              }
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <Input
              label="Position"
              name={`position-${internshipIndex}`}
              value={internship.position}
              onChange={(e) => handleInternshipChange(e, internshipIndex)}
              decoration={<BiPopsicle size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <Input
              label="Location"
              name={`location-${internshipIndex}`}
              value={internship.location}
              onChange={(e) => handleInternshipChange(e, internshipIndex)}
              decoration={<BiMap size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <Input
              label="Date"
              name={`date-${internshipIndex}`}
              value={internship.date}
              onChange={(e) => handleInternshipChange(e, internshipIndex)}
              decoration={<BiCalendar size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />

            <TextAreaMani
              label="Experience"
              name={`experience-${internshipIndex}`}
              value={internship.experience}
              onChange={(e) => handleInternshipChange(e, internshipIndex)}
              attributes={{
                maxLength: 50,
                autoCorrect: "off",
                autoCapitalize: "off",
                spellCheck: "false",
              }}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />

            <div className="flex items-center gap-2 justify-center -mt-5">
              <button
                type="button"
                onClick={() => removeInternship(internshipIndex)}
                className="text-danger_mani dark:text-danger_mani-dark font-semibold focus:outline-none border-2 border-danger_mani dark:border-danger_mani-dark py-1 px-4 rounded-xl hover:bg-red-100 hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
