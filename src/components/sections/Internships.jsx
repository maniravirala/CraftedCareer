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
import { useDarkMode } from "../../contexts/Theme/DarkModeContext";
import Lottie from "react-lottie";
import { arrowDarkLottie, arrowLottie } from "../../assets";


const Internships = () => {
  const { formData, handleChange, handleVisibility } = useFormData();
  const { darkMode } = useDarkMode();

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
      
      {internships.length === 0 ? (
        <div className="grid grid-rows-12 grid-cols-12 gap-4 p-4">
          {/* create a div starting from row 5 to row 12 and col 1 to col 5 that consists of the arrow */}
          <div className="h-48 col-start-5 col-end-13 row-start-1 row-end-6 relative overflow-hidden">
            <div className="flex items-center gap-2 -z-10 absolute -right-6 transform translate-x-1/4 -translate-y-1/4 rotate-180">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: darkMode ? arrowDarkLottie : arrowLottie,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                isClickToPauseDisabled={true}
                // style={{ transform: "rotate(180deg)", margin: "0 20px" }}
                height={300}
                width={300}
              />
            </div>
          </div>

          <div className="row-start-6 row-end-13 col-span-12 flex flex-col items-center">
            <h3 className="text-xl font-semibold">
              Add your Internships
            </h3>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              Add your Internships to showcase your work experience.
            </p>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Internships;
