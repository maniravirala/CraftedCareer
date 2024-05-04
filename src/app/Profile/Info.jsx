import React from "react";
import { useFormData } from "../../contexts/Data/FormDataContext";

const Info = ({ referalDetails }) => {
  const { formData } = useFormData();
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <img
            src="https://randomuser.me/api/portraits/men/18.jpg"
            alt="profile"
            className="rounded-full h-20 w-20"
          />
          {/* display the credit points */}
          <div className="flex items-center gap-2 mt-2">
            <p className="text-gray-400 text-sm">Credit Points:</p>
            <p className="text-gray-400 text-sm">
              {referalDetails.credits}
            </p>
          </div>
        </div>
        <h1 className="text-xl text-gray-900 dark:text-gray-200 font-medium mt-4">
          {referalDetails.name}
        </h1>
        <p className="text-gray-400 text-sm">
          {formData.personalInfo.position}
        </p>
      </div>
      <div className="mt-6 flex justify-center items-center flex-col">
        <div className="flex items-center gap-4">
          <p className="text-gray-400 text-sm">{referalDetails.email}</p>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <p className="text-gray-400 text-sm">{formData.personalInfo.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
