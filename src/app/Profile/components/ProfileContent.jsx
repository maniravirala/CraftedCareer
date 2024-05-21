import React from "react";
import CountUp from "react-countup";

const ProfileContent = ({ profile }) => {

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">
      {Object.entries(profile).map(([key, value]) => (
        <div key={key} className="bg-background dark:bg-gray-700 shadow-md rounded-lg p-6 flex flex-col justify-center items-center">
          <h1 className="text-xl text-gray-900 dark:text-gray-200 font-medium text-center">
            {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
          </h1>
          <p className="text-2xl text-gray-900 dark:text-gray-200 font-semibold mt-2 text-center">
            <CountUp end={value} duration={2} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProfileContent;
