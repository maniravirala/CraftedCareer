import React, { useState } from "react";
import { 
  BiMap,
  BiPlusCircle,
  BiSolidCreditCard,
  BiSolidGraduation,
  BiSolidSchool,
} from "react-icons/bi";
import InputMani from "../Inputs/InputMani";
import DatePickerMani from "../Inputs/DatepickerMani";
import DropDownMani from "../Inputs/DropDownMani";
import * as dayjs from "dayjs";

import { useFormData } from "../../contexts/Data/FormDataContext";

const Education = () => {
  const { formData, handleChange } = useFormData();

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

  const handleDateChange = (date, dateString, index) => {
    const updatedEducation = [...education];
    updatedEducation[index].date = dateString;
    setEducation(updatedEducation);
    handleChange(
      { target: { name: "education", value: updatedEducation } },
      "education"
    );
  };

  const handleScoreTypeChange = (value, educationIndex) => {
    const updatedEducation = [...education];
    updatedEducation[educationIndex].scoreType = value;
    setEducation(updatedEducation);
    handleChange(
      { target: { name: "education", value: updatedEducation } },
      "education"
    );
  };

  const today1 = dayjs().format("MM/YYYY");
  const today2 = dayjs().format("MM/YYYY");
  const today = [today1, today2];

  const addEducation = () => {
    setEducation([
      ...education,
      {
        institute: "",
        degree: "",
        location: "",
        date: today,
        score: "",
        scoreType: "cgpa",
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
    <div>
      <div className="flex items-center justify-between w-full p-3 gap-8">
        <h2 className="text-xl font-semibold">Education</h2>
        <button
          type="button"
          onClick={addEducation}
          className="flex items-center gap-2 text-primary font-semibold focus:outline-none"
        >
          <BiPlusCircle
            className="inline-block"
            size="1.5rem"
            onClick={addEducation}
          />
        </button>
      </div>
      <div>
        {education.map((edu, eduIndex) => (
          <div
            key={eduIndex}
            className="flex flex-col w-full p-5 gap-8"
          >
            <InputMani
              label="Degree"
              name={`degree-${eduIndex}`}
              value={edu.degree}
              onChange={(e) => handleEducationChange(e, eduIndex)}
              decoration={
                <BiSolidGraduation size="1rem" className="text-gray-400" />
              }
            />
            <InputMani
              label="Institute"
              name={`institute-${eduIndex}`}
              value={edu.institute}
              onChange={(e) => handleEducationChange(e, eduIndex)}
              decoration={
                <BiSolidSchool size="1rem" className="text-gray-400" />
              }
            />
            <InputMani
              label="Location"
              name={`location-${eduIndex}`}
              value={edu.location}
              onChange={(e) => handleEducationChange(e, eduIndex)}
              decoration={<BiMap size="1rem" className="text-gray-400" />}
            />
            <div className="grid grid-cols-10 gap-2">
              <div className="col-span-4">
                <DropDownMani
                  className="h-full w-full outline-none"
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
                <InputMani
                  label="Score"
                  name={`score-${eduIndex}`}
                  value={edu.score}
                  onChange={(e) => handleEducationChange(e, eduIndex)}
                  decoration={
                    <BiSolidCreditCard size="1rem" className="text-gray-400" />
                  }
                />
              </div>
            </div>

            <DatePickerMani
              name={`date-${eduIndex}`}
              value={edu.date}
              onChange={handleDateChange}
              index={eduIndex}
              range={true}
            />

            <div className="flex items-center gap-2 justify-center -mt-5">
              <button
                type="button"
                onClick={() => removeEducation(eduIndex)}
                className="text-danger_mani font-semibold focus:outline-none border-2 border-danger_mani py-1 px-4 rounded-xl hover:bg-red-100 hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
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

export default Education;
