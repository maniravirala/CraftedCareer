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
            <label htmlFor="profilePicInput" className="cursor-pointer">
                Upload Profile Picture
            </label>
        </div>

        //  </ImgCrop> 
    );
};
export default UploadMani;