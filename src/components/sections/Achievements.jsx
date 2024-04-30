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
import { useDarkMode } from "../../contexts/Theme/DarkModeContext";
import Lottie from "react-lottie";
import { arrowDarkLottie, arrowLottie } from "../../assets";


const Achievements = () => {
  const { formData, handleChange, handleVisibility } = useFormData();
  const { darkMode } = useDarkMode();

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
      
      {achievements.length === 0 ? (
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
              Add your Achievements
            </h3>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              Add your achievements to showcase your skills and accomplishments.
            </p>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Achievements;
