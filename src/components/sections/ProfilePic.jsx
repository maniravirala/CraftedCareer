import React from "react";
import UploadMani from "../Inputs/UploadMani";
import { BiMinusCircle } from "react-icons/bi";

import { useFormData } from "../../contexts/Data/FormDataContext";

const ProfilePic = () => {
  const { formData, handleProfilePic } = useFormData();

  return (
    <div>
      <div className="flex items-center justify-between w-full p-3 gap-8">
        <h2 className="text-xl font-semibold">Profile Picture</h2>
      </div>

      <div className="flex items-center justify-center w-full p-3 sm:p-10 gap-8">
        <div className="flex items-center justify-center w-32 h-32 bg-white rounded-full">
          <img
            className="w-32 h-32 rounded-full"
            src={formData.profilePic}
            alt="profile"
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full p-3 gap-8">
        <UploadMani handleProfilePic={handleProfilePic} />
        {formData.profilePic && (
          <BiMinusCircle
            onClick={() => handleProfilePic("")}
            className="text-danger_mani cursor-pointer w-6 h-6"
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePic;
