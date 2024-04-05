import React from "react";
import FormData from "../Data/FormData";
import Form from "../../components/Form";
import Preview from "../../components/Preview"; 

const Resume = () => {
  const { formData, handleChange, handleProfilePic } = FormData();

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      handleProfilePic(reader.result);
    };
  };

  return (
    <div className=" ">
      <div className="flex mx-6">
        <div className="w-full">
          <Form
            formData={formData}
            handleChange={handleChange}
            handleProfilePic={handleProfilePic}
          />  
        </div>
        <div className="max-h-[90vh] overflow-y-auto w-full">
          <Preview formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
