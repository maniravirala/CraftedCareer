import React, { useState } from "react";

const FloatButtonGroup = ({
  trigger,
  type = "circle",
  style,
  icon,
  children,
}) => {
  // if (trigger === 'hover') then onhover show and hide children
  // if (trigger === 'click') then onclick show and hide children
  // if (trigger === 'both') then show children on hover and click
  const [show, setShow] = useState(false);

  return (
    <div
      className="fixed bottom-0 right-0 mb-4 mr-4"
      style={style}
      onMouseEnter={() => {
        if (trigger === "hover" || trigger === "both") {
          setShow(true);
        }
      }}
      onMouseLeave={() => {
        if (trigger === "hover" || trigger === "both") {
          setShow(false);
        }
      }}
    >
      {/* floating button animation */}
      {show && (
        <div className="transition-opacity duration-300 opacity-100 flex flex-col gap-2">
          {children}
        </div>
      )}

      <button
        className={`${
          type === "circle" ? "w-12 h-12 rounded-full" : "w-10 h-10 rounded-lg"
        } bg-blue-500 hover:bg-blue-600 dark:bg-slate-600 dark:hover:bg-slate-700 text-white flex justify-center items-center mt-2`}
        onClick={() => {
          if (trigger === "click" || trigger === "both") {
            setShow(!show);
          }
        }}
      >
        {/* if show is true then rotate the icon */}
        <div
          className={`transition-transform duration-300 transform flex justify-center items-center ${
            show ? "rotate-45" : ""
          }`}
        >
          {icon}
        </div>
      </button>
    </div>
  );
};

export default FloatButtonGroup;
