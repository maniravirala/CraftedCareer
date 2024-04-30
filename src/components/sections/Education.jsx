import React, { useState } from "react";
import {
  BiCalendar,
  BiMap,
  BiPlusCircle,
  BiSolidCreditCard,
  BiSolidGraduation,
  BiSolidSchool,
} from "react-icons/bi";
import Input from "../Inputs/Input";
import DropDownMani from "../Inputs/DropDownMani";

import { useFormData } from "../../contexts/Data/FormDataContext";
import { useDarkMode } from "../../contexts/Theme/DarkModeContext";
import Lottie from "react-lottie";
import { arrowDarkLottie, arrowLottie } from "../../assets";


const Education = () => {
  const { formData, handleChange } = useFormData();
  const { darkMode } = useDarkMode();

  const [education, setEducation] = useState(formData.education || []);

  const handleEducationChange = (e, educationIndex) => {
    const updatedEducation = [...education];
    const name = e.target.name.split("-")[0];
    updatedEducation[educationIndex][name] = e.target.value;
    setEducation(updatedEducation);
    handleChange(
      { target: { name: "education", value: updatedEducation } },
      "education"
    );
  };

  // const handleScoreTypeChange = (value, educationIndex) => {
  //   const updatedEducation = [...education];
  //   updatedEducation[educationIndex].scoreType = value;
  //   setEducation(updatedEducation);
  //   handleChange(
  //     { target: { name: "education", value: updatedEducation } },
  //     "education"
  //   );
  // };

  const handleScoreTypeChange = (value, index) => {
    const updatedEducation = [...education];
    updatedEducation[index].scoreType = value;
    setEducation(updatedEducation);
    handleChange(
      { target: { name: "education", value: updatedEducation } },
      "education"
    );
  };
  

  const addEducation = () => {
    setEducation([
      ...education,
      {
        institute: "",
        degree: "",
        location: "",
        date: "",
        score: "",
        scoreType: "CGPA",
      },
    ]);
  };

  const removeEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
    handleChange(
      { target: { name: "education", value: updatedEducation } },
      "education"
    );
  };

  return (
    <div className="h-full pt-8">
      <div className="flex items-center justify-between w-full p-3 gap-8">
        <h2 className="text-xl font-semibold">Education</h2>
        <button
          type="button"
          onClick={addEducation}
          className="flex items-center gap-2 text-primary dark:text-primary-dark font-semibold focus:outline-none"
        >
          <BiPlusCircle
            className="inline-block"
            size="1.5rem"
            onClick={addEducation}
          />
        </button>
      </div>
      
      {education.length === 0 ? (
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
              Add your Education
            </h3>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              Add your education details to showcase your academic background.
            </p>
          </div>
        </div>
      ) : (
      <div>
        {education.map((edu, eduIndex) => (
          <div key={eduIndex} className="flex flex-col w-full p-5 gap-8">
            <Input
              label="Degree"
              name={`degree-${eduIndex}`}
              value={edu.degree}
              onChange={(e) => handleEducationChange(e, eduIndex)}
              decoration={
                <BiSolidGraduation size="1rem" className="text-gray-400" />
              }
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <Input
              label="Institute"
              name={`institute-${eduIndex}`}
              value={edu.institute}
              onChange={(e) => handleEducationChange(e, eduIndex)}
              decoration={
                <BiSolidSchool size="1rem" className="text-gray-400" />
              }
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <Input
              label="Location"
              name={`location-${eduIndex}`}
              value={edu.location}
              onChange={(e) => handleEducationChange(e, eduIndex)}
              decoration={<BiMap size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <div className="grid grid-cols-10 gap-2">
              <div className="col-span-4">
                <DropDownMani
                  className="h-full w-full rounded-lg outline-none"
                  optionsClassName="h-full w-full "
                  index={eduIndex}
                  handleChange={handleScoreTypeChange}
                  value={edu.scoreType}
                  options={[
                    {
                      value: "cgpa",
                      label: "CGPA",
                    },
                    {
                      value: "percentage",
                      label: "Percentage",
                    },
                  ]}
                />
              </div>
              <div className="col-span-6">
                <Input
                  label="Score"
                  name={`score-${eduIndex}`}
                  value={edu.score}
                  onChange={(e) => handleEducationChange(e, eduIndex)}
                  decoration={
                    <BiSolidCreditCard size="1rem" className="text-gray-400" />
                  }
                  className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
                />
              </div>
            </div>
            <Input
              label="Date"
              name={`date-${eduIndex}`}
              value={edu.date}
              onChange={(e) => handleEducationChange(e, eduIndex)}
              decoration={<BiCalendar size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <div className="flex items-center gap-2 justify-center -mt-5">
              <button
                type="button"
                onClick={() => removeEducation(eduIndex)}
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

export default Education;
