import React, { useState } from "react";
import { BiAward, BiCalendar, BiPlusCircle } from "react-icons/bi";
import Input from "../Inputs/Input"; 
import { Switch } from "antd";

import { useFormData } from "../../contexts/Data/FormDataContext";

const ExtraCurricularActivities = () => {
  const { formData, handleChange, handleVisibility } = useFormData();

  const [activities, setActivities] = useState(
    formData.extraCurricularActivities || []
  );

  const handleActivityChange = (e, index) => {
    const updatedActivities = [...activities];
    const name = e.target.name.split("-")[0];
    updatedActivities[index][name] = e.target.value;
    setActivities(updatedActivities);
    handleChange(
      {
        target: { name: "extraCurricularActivities", value: updatedActivities },
      },
      "extraCurricularActivities"
    );
  };

  const addActivity = () => {
    setActivities([...activities, { activity: "", date: "" }]);
  };

  const removeActivity = (index) => {
    const updatedActivities = [...activities];
    updatedActivities.splice(index, 1);
    setActivities(updatedActivities);
    handleChange(
      {
        target: { name: "extraCurricularActivities", value: updatedActivities },
      },
      "extraCurricularActivities"
    );
  };

  const handleToggle = () => {
    handleVisibility("extraCurricularActivities");
  };

  return (
    <div className="h-full pt-8">
      <div className="flex items-center justify-between w-full p-3 gap-8">
        <h2 className="text-xl font-semibold">Extra Curricular Activities</h2>
        <div className="flex gap-4">
          <Switch
            defaultChecked
            onChange={handleToggle}
            value={formData.visibility.extraCurricularActivities}
            style={{
              backgroundColor: formData.visibility.extraCurricularActivities
                ? "#58d68d"
                : "#ec7063",
            }}
          />
          <button
            type="button"
            onClick={addActivity}
            className="flex items-center gap-2 text-primary dark:text-primary-dark font-semibold focus:outline-none"
          >
            <BiPlusCircle
              className="inline-block"
              size="1.5rem"
              onClick={addActivity}
            />
          </button>
        </div>
      </div>
      <div>
        {activities.map((activity, activityIndex) => (
          <div
            key={activityIndex}
            className="flex flex-col w-full p-5 gap-8"
          >
            <Input
              label="Activity"
              name={`activity-${activityIndex}`}
              value={activity.activity}
              onChange={(e) => handleActivityChange(e, activityIndex)}
              decoration={<BiAward className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            {/* <Input
                            label="Date"
                            name={`date-${activityIndex}`}
                            value={activity.date}
                            onChange={(e) => handleDateChange(e, activityIndex)}
                            type="date"
                        /> */}

            <Input
              label="Date"
              name={`date-${activityIndex}`}
              value={activity.date}
              onChange={(e) => handleActivityChange(e, activityIndex)}
              decoration={<BiCalendar className="text-gray-400" />}
              className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
            />
            
            <div className="flex items-center gap-2 justify-center -mt-5">
              <button
                type="button"
                onClick={() => removeActivity(activityIndex)}
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

export default ExtraCurricularActivities;
