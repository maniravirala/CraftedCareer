import React, { useState } from "react";
import { BiAward, BiPlusCircle } from "react-icons/bi";
import InputMani from "../Inputs/InputMani";
import DatePickerMani from "../Inputs/DatepickerMani";
import * as dayjs from "dayjs";
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

  const handleDateChange = (date, dateString, index) => {
    const updatedActivities = [...activities];
    updatedActivities[index].date = dateString;
    setActivities(updatedActivities);
    handleChange(
      {
        target: { name: "extraCurricularActivities", value: updatedActivities },
      },
      "extraCurricularActivities"
    );
  };

  const today = dayjs().format("MM/YYYY");

  const addActivity = () => {
    setActivities([...activities, { activity: "", date: today }]);
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
    <div>
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
            className="flex items-center gap-2 text-primary font-semibold focus:outline-none"
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
              <button
                type="button"
                onClick={() => removeActivity(activityIndex)}
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

export default ExtraCurricularActivities;
