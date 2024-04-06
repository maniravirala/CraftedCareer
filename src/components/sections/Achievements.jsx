import React, { useState } from "react";
import { BiAddToQueue, BiArchive, BiAward, BiCodeAlt, BiCoinStack, BiEraser, BiNetworkChart, BiTrafficCone, BiTrophy } from "react-icons/bi";
import InputMani from "../Inputs/InputMani";
import TextAreaMani from "../Inputs/TextAreaMani";
import DatePickerMani from "../Inputs/DatepickerMani";
import * as dayjs from 'dayjs';

import { useFormData } from "../../contexts/Data/FormDataContext";

const Achievements = ( ) => {

    const {formData, handleChange} = useFormData();
    
    const [achievements, setAchievements] = useState(formData.achievements || []);

    const handleAchievementChange = (e, achievementIndex) => {
        const updatedAchievements = [...achievements];
        const name = e.target.name.split("-")[0];
        updatedAchievements[achievementIndex][name] = e.target.value;
        setAchievements(updatedAchievements);
        handleChange({ target: { name: "achievements", value: updatedAchievements } }, "achievements");
    };

    const handleDateChange = (date, dateString, achievementIndex) => {
        const updatedAchievements = [...achievements];
        updatedAchievements[achievementIndex].date = dateString;
        setAchievements(updatedAchievements);
        handleChange({ target: { name: "achievements", value: updatedAchievements } }, "achievements");
    }

    // get today's date in the format dayjs'MM/YYYY'
    const today = dayjs().format('MM/YYYY');

    const addAchievement = () => {
        setAchievements([...achievements, { title: "", date: today, description: "" }]);
    }

    const removeAchievement = (index) => {
        const updatedAchievements = [...achievements];
        updatedAchievements.splice(index, 1);
        setAchievements(updatedAchievements);
        handleChange({ target: { name: "achievements", value: updatedAchievements } }, "achievements");
    }

    return (
        <div>
            <div className="flex items-center justify-between w-full p-3 sm:p-10 gap-8">
                <h2 className="text-xl font-semibold">Achievements</h2>
                <button type="button" onClick={addAchievement} className="flex items-center gap-2 text-blue-500 font-semibold focus:outline-none">
                    <BiAddToQueue className="inline-block" size="1.5rem" onClick={addAchievement} />
                    Add Achievement
                </button>
            </div>
            <div>
                {achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex flex-col w-full p-5 sm:p-10 gap-8">
                        <InputMani
                            label="Title"
                            name={`title-${achievementIndex}`}
                            value={achievement.title}
                            onChange={(e) => handleAchievementChange(e, achievementIndex)}
                            decoration={<BiTrophy size="1rem" className="text-gray-400" />}
                        />
                        <DatePickerMani
                            label="Date"
                            name={`date-${achievementIndex}`}
                            value={achievement.date}
                            onChange={(date, dateString) => handleDateChange(date, dateString, achievementIndex)}
                        />
                        <TextAreaMani
                            label="Description"
                            name={`description-${achievementIndex}`}
                            value={achievement.description}
                            onChange={(e) => handleAchievementChange(e, achievementIndex)}
                        />
                        <div className="flex items-center gap-2 justify-center -mt-5">
                            <button type="button" onClick={() => removeAchievement(achievementIndex)} className="text-red-500 font-semibold focus:outline-none">
                                <BiEraser className="inline-block" size="1.5rem" />
                                Remove Achievement
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Achievements;
