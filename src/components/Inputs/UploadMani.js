import React from 'react';

const UploadMani = ({ handleProfilePic }) => {

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            handleProfilePic(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        // <ImgCrop rotationSlider>
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="profilePicInput"
            />
            <label htmlFor="profilePicInput" className="cursor-pointer bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300 shadow-[0_4px_10px_rgba(0,0,0,0.03)] px-4 py-3 rounded-lg">
                Upload Profile Picture
            </label>
        </div>

        //  </ImgCrop> 
    );
};
export default UploadMani;