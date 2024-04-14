import React, { useState } from "react";
import { useDarkMode } from "../../contexts/Theme/DarkModeContext";

const ThemeToggle = ({ ButtonClassName }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [isDark, setIsDark] = useState(!darkMode);
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    border: "none",
    background: "none",
    padding: 0,
    margin: 0,
    cursor: "pointer",
    fontFamily: "inherit",
  };

  const iconStyle = {
    width: "32px",
    height: "32px",
    padding: "4px",
    overflow: "hidden",
    position: "relative",
  };

  const circleStyle = {
    width: "14px",
    height: "14px",
    borderRadius: "24px",
    border: isDark ? "1px solid #7a818e" : "1px solid #1e2433",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: isDark ? "#7a818e" : "rgb(255, 204, 0)",
    transition: "width .4s, height .4s, border .4s, background-color .4s",
    zIndex: 10,
  };

  const linesContainerStyle = {
    width: "24px",
    height: "24px",
    borderRadius: "24px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "transform .4s, opacity .4s",
    opacity: isDark ? 0 : 1,
  };

  const lineStyle = {
    display: "block",
    width: "2px",
    height: "24px",
    borderRadius: "2px",
    position: "relative",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgb(255, 204, 0)",
  };

  const line2Style = {
    ...lineStyle,
    width: "24px",
    height: "2px",
    top: "-54%",
  };

  const line3Style = {
    ...lineStyle,
    width: "24px",
    height: "2px",
    top: "-60%",
    transform: "translateX(-50%) rotate(45deg)",
  };

  const line4Style = {
    ...lineStyle,
    width: "24px",
    height: "2px",
    top: "-70%",
    transform: "translateX(-50%) rotate(-45deg)",
  };

  const themeCircleStyle = {
    width: "20px",
    height: "20px",
    borderRadius: "24px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // backgroundColor: "#1e2433",
    backgroundColor: isDark ? "#eaeef6" : "#1e2433",
    transition: "width .4s, height .4s, top .4s, left .4s, opacity .4s",
    transitionDelay: ".2s",
    zIndex: 20,
    opacity: isDark ? 1 : 0,
  };

  if (isDark) {
    circleStyle.width = "24px";
    circleStyle.height = "24px";
    themeCircleStyle.top = "40%";
    themeCircleStyle.left = "60%";
  }

  if (isHovered) {
    if (!isDark) {
      linesContainerStyle.transform =
        "translate(-50%, -50%) scale(1.2) rotate(45deg)";
    } else {
      themeCircleStyle.transform = "translate(-40%, -40%) scale(1)";
    }
  }

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    toggleDarkMode();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      style={buttonStyle}
      onClick={handleThemeToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${ButtonClassName} outline-none focus:outline-none `}
    >
      <div style={iconStyle}>
        <div style={circleStyle}></div>
        <div style={linesContainerStyle}>
          <div style={lineStyle}></div>
          <div style={line2Style}></div>
          <div style={line3Style}></div>
          <div style={line4Style}></div>
        </div>
        <div style={themeCircleStyle}></div>
      </div>
    </button>
  );
};

export default ThemeToggle;
