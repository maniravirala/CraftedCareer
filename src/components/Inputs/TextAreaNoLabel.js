import React from "react";

const TextAreaNoLabel = ({
    label,
    name,
    value,
    onChange,
    decoration,
    className = "",
    inputClassName = "",
    decorationClassName = "",
    disabled,
    resize = "none",
}) => {
    return (
        <div
            className={`flex flex-row-reverse items-stretch w-full rounded-xl overflow-hidden bg-white shadow-[0_4px_10px_rgba(0,0,0,0.03)] ${className}`}
        >
            <textarea
                name={name}
                value={value}
                placeholder={label}
                aria-label={label}
                onChange={onChange}
                className={`peer block w-full p-3 text-gray-600 focus:outline-none focus:ring-0 appearance-none ${disabled ? "bg-gray-200" : ""
                    } ${inputClassName}`}
                disabled={disabled}
                style={{ resize }}
            />
            <div
                className={`flex items-center pl-3 py-3 text-gray-600 ${disabled ? "bg-gray-200" : ""
                    } ${decorationClassName}`}
            >
                {decoration}
            </div>
        </div>
    );
}

export default TextAreaNoLabel;