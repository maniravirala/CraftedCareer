import React, { useState } from "react";
import { 
  BiMap,
  BiPlusCircle,
  BiSolidSchool,
  BiTag,
} from "react-icons/bi";
import InputMani from "../Inputs/InputMani";
import TextAreaMani from "../Inputs/TextAreaMani";
import DatePickerMani from "../Inputs/DatepickerMani";
import * as dayjs from "dayjs";
import { Switch } from "antd";

import { useFormData } from "../../contexts/Data/FormDataContext";

const SummerTraining = () => {
  const { formData, handleChange, handleVisibility } = useFormData();

  const [summerTraining, setSummerTraining] = useState(
    formData.summerTraining || []
  );

  const handleSummerTrainingChange = (e, trainingIndex) => {
    const updatedTrainings = [...summerTraining];
    const name = e.target.name.split("-")[0];
    updatedTrainings[trainingIndex][name] = e.target.value;
    setSummerTraining(updatedTrainings);
    handleChange(
      { target: { name: "summerTraining", value: updatedTrainings } },
      "summerTraining"
    );
  };

  const handleDateChange = (date, dateString, index) => {
    const updatedTrainings = [...summerTraining];
    updatedTrainings[index].date = dateString;
    setSummerTraining(updatedTrainings);
    handleChange(
      { target: { name: "summerTraining", value: updatedTrainings } },
      "summerTraining"
    );
  };

  const today1 = dayjs().format("MM/YYYY");
  const today2 = dayjs().format("MM/YYYY");
  const today = [today1, today2];

  const addSummerTraining = () => {
    setSummerTraining([
      ...summerTraining,
      {
        title: "",
        organization: "",
        location: "",
        date: today,
        description: "",
      },
    ]);
  };

  const removeSummerTraining = (index) => {
    const updatedTrainings = [...summerTraining];
    updatedTrainings.splice(index, 1);
    setSummerTraining(updatedTrainings);
    handleChange(
      { target: { name: "summerTraining", value: updatedTrainings } },
      "summerTraining"
    );
  };

  const handleToggle = () => {
    handleVisibility("summerTraining");
  };

  return (
    <div>
      <div className="flex items-center justify-between w-full p-3 gap-8">
        <h2 className="text-xl font-semibold">Summer Trainings</h2>
        <div className="flex gap-4">
          <Switch
            defaultChecked
            onChange={handleToggle}
            value={formData.visibility.summerTraining}
            style={{
              backgroundColor: formData.visibility.summerTraining
                ? "#58d68d"
                : "#ec7063",
            }}
          />
          <button
            type="button"
            onClick={addSummerTraining}
            className="flex items-center gap-2 text-primary font-semibold focus:outline-none"
          >
            <BiPlusCircle
              className="inline-block"
              size="1.5rem"
              onClick={addSummerTraining}
            />
          </button>
        </div>
      </div>
      <div>
        {summerTraining.map((training, trainingIndex) => (
          <div
            key={trainingIndex}
            className="flex flex-col w-full p-5 gap-8"
          >
            <InputMani
              label="Title"
              name={`title-${trainingIndex}`}
              value={training.title}
              onChange={(e) => handleSummerTrainingChange(e, trainingIndex)}
              decoration={<BiTag size="1rem" className="text-gray-400" />}
            />

            <InputMani
              label="Organization"
              name={`organization-${trainingIndex}`}
              value={training.organization}
              onChange={(e) => handleSummerTrainingChange(e, trainingIndex)}
              decoration={
                <BiSolidSchool size="1rem" className="text-gray-400" />
              }
            />
            <InputMani
              label="Location"
              name={`location-${trainingIndex}`}
              value={training.location}
              onChange={(e) => handleSummerTrainingChange(e, trainingIndex)}
              decoration={<BiMap size="1rem" className="text-gray-400" />}
            />

            <DatePickerMani
              name={`date-${trainingIndex}`}
              value={training.date}
              onChange={handleDateChange}
              index={trainingIndex}
              range={true}
            />

            <TextAreaMani
              label="Description"
              name={`description-${trainingIndex}`}
              value={training.description}
              onChange={(e) => handleSummerTrainingChange(e, trainingIndex)}
              attributes={{
                autoCorrect: "off",
                autoCapitalize: "off",
                spellCheck: "false",
              }}
            />

            <div className="flex items-center gap-2 justify-center -mt-5">
              <button
                type="button"
                onClick={() => removeSummerTraining(trainingIndex)}
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

export default SummerTraining;
