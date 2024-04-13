import React, { useState } from "react";
import {  
  BiCalendar,
  BiPlusCircle, 
  BiTrophy,
} from "react-icons/bi";
import Input from "../Inputs/Input";
import TextAreaMani from "../Inputs/TextAreaMani";
import { Switch } from "antd";

import { useFormData } from "../../contexts/Data/FormDataContext";

const Achievements = () => {
  const { formData, handleChange, handleVisibility } = useFormData();

  const [achievements, setAchievements] = useState(formData.achievements || []);

  const handleAchievementChange = (e, achievementIndex) => {
    const updatedAchievements = [...achievements];
    const name = e.target.name.split("-")[0];
    updatedAchievements[achievementIndex][name] = e.target.value;
    setAchievements(updatedAchievements);
    handleChange(
      { target: { name: "achievements", value: updatedAchievements } },
      "achievements"
    );
  };

  const addAchievement = () => {
    setAchievements([
      ...achievements,
      { title: "", date: "", description: "" },
    ]);
  };

  const removeAchievement = (index) => {
    const updatedAchievements = [...achievements];
    updatedAchievements.splice(index, 1);
    setAchievements(updatedAchievements);
    handleChange(
      { target: { name: "achievements", value: updatedAchievements } },
      "achievements"
    );
  };

  const handleToggle = () => {
    handleVisibility("achievements");
  };

  return (
    <div className="h-full pt-8">
      <div className="flex items-center justify-between w-full p-3 gap-8">
        <h2 className="text-xl font-semibold">Achievements</h2>
        <div className="flex gap-4">
          <Switch
            defaultChecked
            onChange={handleToggle}
            value={formData.visibility.achievements}
            style={{
              backgroundColor: formData.visibility.achievements
                ? "#58d68d"
                : "#ec7063",
            }}
          />
          <button
            type="button"
            onClick={addAchievement}
            className="flex items-center gap-2 text-primary dark:text-primary-dark font-semibold focus:outline-none"
          >
            <BiPlusCircle
              className="inline-block"
              size="1.5rem"
              onClick={addAchievement}
            />
          </button>
        </div>
      </div>
      <div>
        {achievements.map((achievement, achievementIndex) => (
          <div
            key={achievementIndex}
            className="flex flex-col w-full p-5 gap-8"
          >
            <Input
              label="Title"
              name={`title-${achievementIndex}`}
              value={achievement.title}
              onChange={(e) => handleAchievementChange(e, achievementIndex)}
              decoration={<BiTrophy size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <Input
              label="Date"
              name={`date-${achievementIndex}`}
              value={achievement.date}
              onChange={(e) => handleAchievementChange(e, achievementIndex)}
              decoration={<BiCalendar size="1rem" className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <TextAreaMani
              label="Description"
              name={`description-${achievementIndex}`}
              value={achievement.description}
              onChange={(e) => handleAchievementChange(e, achievementIndex)}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            <div className="flex items-center gap-2 justify-center -mt-5">
              <button
                type="button"
                onClick={() => removeAchievement(achievementIndex)}
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

export default Achievements;
