import React from 'react';

const UploadMani = ({ onChange, disabled, labelText }) => {

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={onChange}
                className="hidden"
                id="profilePicInput"
                disabled={disabled}
            />
            {disabled ? (
                <label htmlFor="profilePicInput" className="select-none cursor-not-allowed bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300 shadow-[0_4px_10px_rgba(0,0,0,0.03)] px-4 py-3 rounded-lg">
                    {labelText}
                </label>
            ) : (
                <label htmlFor="profilePicInput" className="select-none cursor-pointer bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300 shadow-[0_4px_10px_rgba(0,0,0,0.03)] px-4 py-3 rounded-lg">
                    {labelText}
                </label>
            )}
        </div>
    );
};
export default UploadMani;