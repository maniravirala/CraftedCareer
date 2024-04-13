import React, { useState } from "react";
import { 
  BiCalendar,
  BiMap,
  BiPlusCircle,
  BiSolidSchool,
  BiTag,
} from "react-icons/bi";
import Input from "../Inputs/Input";
import TextAreaMani from "../Inputs/TextAreaMani";
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
  
  const addSummerTraining = () => {
    setSummerTraining([
      ...summerTraining,
      {
        title: "",
        organization: "",
        location: "",
        date: "",
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
    <div className="h-full pt-8">
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
            className="flex items-center gap-2 text-primary dark:text-primary-dark font-semibold focus:outline-none"
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
            <Input
              label="Title"
              name={`title-${trainingIndex}`}
              value={training.title}
              onChange={(e) => handleSummerTrainingChange(e, trainingIndex)}
              decoration={<BiTag size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />

            <Input
              label="Organization"
              name={`organization-${trainingIndex}`}
              value={training.organization}
              onChange={(e) => handleSummerTrainingChange(e, trainingIndex)}
              decoration={
                <BiSolidSchool size="1rem" className="text-gray-400" />
              }
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <Input
              label="Location"
              name={`location-${trainingIndex}`}
              value={training.location}
              onChange={(e) => handleSummerTrainingChange(e, trainingIndex)}
              decoration={<BiMap size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <Input
              label="Date"
              name={`date-${trainingIndex}`}
              value={training.date}
              onChange={(e) => handleSummerTrainingChange(e, trainingIndex)}
              decoration={<BiCalendar size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
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
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />

            <div className="flex items-center gap-2 justify-center -mt-5">
              <button
                type="button"
                onClick={() => removeSummerTraining(trainingIndex)}
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

export default SummerTraining;
