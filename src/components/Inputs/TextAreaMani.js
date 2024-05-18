import React, {useEffect} from "react";

const TextAreaMani = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  disabled,
  decoration,
  className = "",
  inputClassName = "",
  decorationClassName = "",
  resize = "none",
  attributes = {},
}) => {

  const textAreaAutoHeight = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  useEffect(() => {
    const textarea = document.getElementById(name);
    textarea.style.height = "inherit";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
    , [name, value]);


  return (
    <div className={`relative flex flex-row-reverse items-stretch w-full rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.03)] ${className}`}>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`peer block w-full p-3 focus:outline-none focus:ring-0 appearance-none  ${disabled ? "bg-gray-200 rounded-r-xl" : "bg-transparent"
          } ${inputClassName}`}
        placeholder={placeholder}
        disabled={disabled}
        style={{ resize }}
        {...attributes}
        onInput={textAreaAutoHeight}
      />
      <label
        htmlFor={name}
        className={`absolute select-none text-sm duration-300 transform -translate-y-8 scale-75 top-2 z-10 origin-[0] peer-placeholder-shown:cursor-text left-3 peer-focus:left-3 peer-placeholder-shown:left-10 peer-focus:top-2 peer-placeholder-shown:top-[0.9rem] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8
          ${disabled ? "text-gray-300" : "text-gray-400"}`}
      >
        {label}
      </label>
      <div
        className={`flex items-center pl-3 py-3  ${disabled ? "bg-gray-200 rounded-l-xl" : ""
          } ${decorationClassName}`}
      >
        {decoration}
      </div>
    </div>
  );
}

export default TextAreaMani;