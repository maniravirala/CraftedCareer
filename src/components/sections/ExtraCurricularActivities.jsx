import React, { useState } from "react";
import { BiAddToQueue, BiAward, BiEraser } from "react-icons/bi";
import InputMani from "../Inputs/InputMani";
import DatePickerMani from "../Inputs/DatepickerMani";
import * as dayjs from 'dayjs';

import { useFormData } from "../../contexts/Data/FormDataContext";

const ExtraCurricularActivities = ( ) => {

    const {formData, handleChange} = useFormData();
    
    const [activities, setActivities] = useState(formData.extraCurricularActivities || []);

    const handleActivityChange = (e, index) => {
        const updatedActivities = [...activities];
        const name = e.target.name.split("-")[0];
        updatedActivities[index][name] = e.target.value;
        setActivities(updatedActivities);
        handleChange({ target: { name: "extraCurricularActivities", value: updatedActivities } }, "extraCurricularActivities");
    }

    const handleDateChange = (date, dateString, index) => {
        const updatedActivities = [...activities];
        updatedActivities[index].date = dateString;
        setActivities(updatedActivities);
        handleChange({ target: { name: "extraCurricularActivities", value: updatedActivities } }, "extraCurricularActivities");
    }

    
    const today = dayjs().format('MM/YYYY');

    const addActivity = () => {
        setActivities([...activities, { activity: "", date: today }]);
    }

    const removeActivity = (index) => {
        const updatedActivities = [...activities];
        updatedActivities.splice(index, 1);
        setActivities(updatedActivities);
        handleChange({ target: { name: "extraCurricularActivities", value: updatedActivities } }, "extraCurricularActivities");
    }

    return (
        <div>
            <div
                className="flex items-center justify-between w-full p-3 sm:p-10 gap-8">
                <h2
                    className="text-xl font-semibold">
                    Extra Curricular Activities
                </h2>
                <button
                    type="button"
                    onClick={addActivity}
                    className="flex items-center gap-2 text-blue-500 font-semibold focus:outline-none">
                    <BiAddToQueue className="inline-block" size="1.5rem" onClick={addActivity} />
                    Add Activity
                </button>
            </div>
            <div>
                {activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex flex-col w-full p-5 sm:p-10 gap-8">
                        <InputMani
                            label="Activity"
                            name={`activity-${activityIndex}`}
                            value={activity.activity}
                            onChange={(e) => handleActivityChange(e, activityIndex)}
                            decoration={<BiAward className="text-gray-400" />}
                        />
                        {/* <InputMani
                            label="Date"
                            name={`date-${activityIndex}`}
                            value={activity.date}
                            onChange={(e) => handleDateChange(e, activityIndex)}
                            type="date"
                        /> */}


                        <DatePickerMani
                            // range
                            name={`date-${activityIndex}`}
                            value={activity.date}
                            onChange={handleDateChange}
                            index={activityIndex}
                        />


                        <div className="flex items-center gap-2 justify-center -mt-5">
                            <button type="button" onClick={() => removeActivity(activityIndex)} className="text-red-500 font-semibold focus:outline-none">
                                <BiEraser className="inline-block" size="1.5rem" />
                                Remove Activity
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExtraCurricularActivities;