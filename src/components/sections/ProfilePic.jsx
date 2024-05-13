import React, { useState } from "react";
import UploadMani from "../Inputs/UploadMani";
import { BiMinusCircle } from "react-icons/bi";
import Links from "../../assets/Data/links";
import axios from "axios";
import { Spin } from "antd";

import { useFormData } from "../../contexts/Data/FormDataContext";
import DangerAlert from "../Modals/DangerAlert";
import ClipLoader from "react-spinners/ClipLoader";
import toast from "react-hot-toast";

const ProfilePic = () => {
  const { formData, handleProfilePic } = useFormData();
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("profilePicture", file);
    setFile(formData);
    console.log(setFile);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        toast.error("Please select a file to upload.");
        return;
      }
      setIsUploading(true);
      const res = await axios.post(
        Links.API.UPDATE_PROFILE.replace(":userId", "6624b128abbb5801aa3f6d5f"),
        file,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        handleProfilePic(res.data.data.profilePicture);
        toast.success("Profile picture uploaded successfully.");
        setFile(null);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async () => {
    try {
      if (isDeleting) {
        return;  
      }
      setIsDeleting(true);
      let res = await axios.delete(
        Links.API.DELETE_PROFILE.replace(":userId", "6624b128abbb5801aa3f6d5f")
      );
      if (res.status === 200) {
        handleProfilePic("");
        toast.success("Profile picture deleted successfully.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };
  

  const openModal = () => {
    setOpen(true);
  };

  return (
    <div className="h-full pt-8">
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
        {isUploading ? (
          ""
        ) : (
          <UploadMani
            onChange={handleChange}
            labelText={"Select a file"}
          />
        )}
        {isUploading ? (
          <button
            className="bg-gray-400 cursor-not-allowed py-2 px-4 shadow-lg rounded-lg text-center flex"
            disabled
          >
            Uploading
            <ClipLoader
              color="#d63636"
              className="ml-4"
              size={25}
              speedMultiplier={1}
            />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-secondary text-white py-2 px-4 shadow-lg rounded-lg text-center flex"
          >
            Upload
          </button>
        )}
        {formData.profilePic && (
          <BiMinusCircle
            onClick={openModal}
            className="text-danger_mani dark:text-danger_mani-dark  cursor-pointer w-6 h-6"
          />
        )}

        {isDeleting && <Spin fullscreen />}

        <DangerAlert
          message="Are you sure you want to delete your profile picture?"
          handleDelete={handleDelete}
          title="Delete Profile Picture"
          buttonText="Delete"
          open={open}
          setOpen={setOpen}
        />
      </div>
    </div>

    // <form id="form" onSubmit={handleSubmit}>
    //     <div className="input-group">
    //       <label htmlFor="file">Select image</label>
    //       <input id="file" type="file" name="file" accept="image/*" onChange={handleChange} />
    //     </div>
    //     <button className="submit-btn" type="submit">Upload</button>
    //   </form>
  );
};

export default ProfilePic;
