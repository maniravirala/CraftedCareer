import { Tooltip } from "antd";
import React from "react";

const FloatButton = ({
  icon,
  onClick,
  tooltip,
  className,
  type = "circle",
}) => {
  return (
    <Tooltip title={tooltip} placement="left">
      <button
        className={`text-white bg-blue-500 hover:bg-blue-600 dark:bg-slate-600 dark:hover:bg-slate-700 p-3 rounded-full shadow-md hover:shadow-lg flex items-center justify-center 
      ${type === "circle" ? "w-12 h-12" : "w-10 h-8"} 
       ${className}`}
        onClick={onClick}
        title={tooltip}
      >
        {icon}
      </button>
    </Tooltip>
  );
};

export default FloatButton;
