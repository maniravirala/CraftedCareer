import React, { useState } from "react";
import { BiAward, BiLogOut, BiSolidDashboard } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const Sidebar = ({ setActiveContent, activeContent }) => {
  const navLinks = [
    { label: "Dashboard", icon: <BiSolidDashboard className="w-5 h-5" />, path: "/dashboard" },
    { label: "Profile", icon: <BiAward className="w-5 h-5" />, path: "/profile" },
    { label: "Refer and Earn", icon: <BiAward className="w-5 h-5" />, path: "/refer" },
    { label: "Download History", icon: <BiAward className="w-5 h-5" />, path: "/download-history" },
    { label: "Account Settings", icon: <BiAward className="w-5 h-5" />, path: "/account-settings" },
    { label: "Help and Support", icon: <BiAward className="w-5 h-5" />, path: "/help-support" },
    { label: "Logout", icon: <BiLogOut className="w-5 h-5" />, path: "/logout" },
  ];

  const [hovered, setHovered] = useState(null);
  const indicatorControls = useAnimation();

  const handleLinkClick = (linkPath) => {
    const previousIndex = navLinks.findIndex(
      (link) => link.path.replace("/", "").toLowerCase() === activeContent
    );
    const newIndex = navLinks.findIndex(
      (link) => link.path.replace("/", "").toLowerCase() === linkPath
    );
    indicatorControls.start({
      y: newIndex * 48, // Assuming each link is 48px in height, adjust accordingly
      transition: { duration: 0.3 },
    });
    setActiveContent(linkPath);
  };

  return (
    <div className="space-y-2 relative">
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="space-y-2 relative">
          <AnimatePresence>
            <motion.div
              className="absolute left-0 top-2 w-1 bg-blue-500"
              initial={false}
              animate={indicatorControls}
              layoutId="activeIndicator"
              style={{ height: 40 }} // Adjust height based on your link height
            />
          </AnimatePresence>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 hover:dark:bg-gray-700 text-gray-700 dark:text-gray-200 ${
                activeContent === link.path.replace("/", "").toLowerCase()
                  ? "bg-gray-100 dark:bg-gray-700"
                  : ""
              }`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleLinkClick(link.path.replace("/", "").toLowerCase())}
            >
              {link.icon}
              <span className="mx-4 font-normal">{link.label}</span>
              {hovered === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-2 h-2 bg-green-500 rounded-full ml-2"
                ></motion.div>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
