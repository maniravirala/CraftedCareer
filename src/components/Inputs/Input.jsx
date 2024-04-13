import React from "react";

const Input = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  disabled,
  decoration,
  className = "",
  inputClassName = "",
  decorationClassName = "",
  attributes = {},
  onKeyDown,
}) => {
  return (
    <div
      className={`relative flex flex-row-reverse items-stretch w-full rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.03)] ${className} `}
    >
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`peer block w-full p-3 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-0 appearance-none ${
          disabled ? "bg-gray-200 rounded-r-xl" : "bg-transparent"
        } ${decoration ? "rounded-r-lg" : "rounded-lg"} ${inputClassName}`}
        placeholder=" "
        disabled={disabled}
        {...attributes}
        onKeyDown={onKeyDown}
      />
      <label
        htmlFor={name}
        className={`absolute select-none text-sm duration-300 transform -translate-y-8 scale-75 top-2 z-10 origin-[0] peer-placeholder-shown:cursor-text left-3 peer-placeholder-shown:left-10 peer-focus:left-3 peer-focus:top-2 peer-placeholder-shown:top-[0.9rem] peer-focus:text-primary peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8
          ${disabled ? "text-gray-300" : "text-gray-400"}`}
      >
        {label}
      </label>

      {decoration && (
        <div
          className={`flex items-center pl-3 py-3 rounded-l-lg disabled:opacity-50 disabled:pointer-events-none ${
            disabled ? "bg-gray-200 rounded-l-xl" : ""
          } ${decorationClassName}`}
        >
          {decoration}
        </div>
      )}
    </div>
  );
};

export default Input;
