import React from "react";
import { useFormData } from "../../contexts/Data/FormDataContext";
import ReferAndEarn from "./ReferAndEarn";
import ReferHistory from "./ReferHistory";

const Profile = () => {
  const { formData } = useFormData();

  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto bg-transparent w-full">
      <div className="m-6 flex gap-4">
        <div className="w-1/4 flex flex-col gap-4">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://randomuser.me/api/portraits/men/18.jpg"
                alt="profile"
                className="rounded-full h-20 w-20"
              />
              <h1 className="text-xl text-gray-900 dark:text-gray-200 font-medium mt-4">
                {formData.personalInfo.name}
              </h1>
              <p className="text-gray-400 text-sm">
                {formData.personalInfo.position}
              </p>
            </div>
            <div className="mt-6 flex justify-center items-center flex-col">
              <div className="flex items-center gap-4">
                <p className="text-gray-400 text-sm">
                  {formData.personalInfo.email}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <p className="text-gray-400 text-sm">
                  {formData.personalInfo.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 h-full">
            <ReferHistory />
          </div>
        </div>
        <div className="w-3/4 flex flex-col gap-4">
          {/* <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 ">
            <h1 className="text-xl font-medium">About</h1>
            <p className="text-gray-400 text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada, purus sit amet rhoncus aliquet, tortor risus aliquet
              turpis, a lacinia tortor nibh vel diam. Aenean sit amet turpis
              sagittis, tincidunt ligula nec, ultrices metus. Etiam nec turpis
              turpis. Nullam vel libero ac odio tincidunt luctus. Nullam eu
              sollicitudin magna. Sed nec libero sed libero ultrices bibendum.
              Nullam nec nunc nec libero tincidunt vestibulum. Nullam nec nunc
              nec libero tincidunt vestibulum. Nullam nec nunc nec libero
              tincidunt vestibulum.
            </p>
          </div> */}
          <div className="bg-white dark:bg-gray-800 text-background-dark dark:text-background shadow-md rounded-lg p-6">
            <ReferAndEarn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
