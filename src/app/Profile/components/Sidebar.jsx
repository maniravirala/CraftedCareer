import React, { useEffect, useMemo } from "react";
import { BiMenuAltLeft, BiSolidAward, BiSolidDashboard, BiSolidDownload, BiSolidHelpCircle, BiSolidLogOut, BiSolidUser, } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const Sidebar = ({ setActiveContent, activeContent }) => {
  const navLinks = useMemo(
    () => [
      {
        label: "Dashboard",
        icon: <BiSolidDashboard className="w-5 h-5" />,
        path: "/dashboard",
      },
      {
        label: "Profile",
        icon: <BiSolidUser className="w-5 h-5" />,
        path: "/profile",
      },
      {
        label: "Refer and Earn",
        icon: <BiSolidAward className="w-5 h-5" />,
        path: "/refer",
      },
      {
        label: "Download History",
        icon: <BiSolidDownload className="w-5 h-5" />,
        path: "/download-history",
      },
      {
        label: "Account Settings",
        icon: <BiMenuAltLeft className="w-5 h-5" />,
        path: "/account-settings",
      },
      {
        label: "Help and Support",
        icon: <BiSolidHelpCircle className="w-5 h-5" />,
        path: "/help-support",
      },
      {
        label: "Logout",
        icon: <BiSolidLogOut className="w-5 h-5" />,
        path: "/logout",
      },
    ],
    []
  );

  const indicatorControls = useAnimation();

  useEffect(() => {
    const index = navLinks.findIndex(
      (link) => link.path.replace("/", "").toLowerCase() === activeContent
    );
    indicatorControls.start({ y: index * 48 });
  }, [activeContent, indicatorControls, navLinks]);

  const handleLinkClick = (linkPath) => {
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
    <div className="space-y-2 relative overflow-y-auto">
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
              onClick={() =>
                handleLinkClick(link.path.replace("/", "").toLowerCase())
              }
            >
              {link.icon}
              <span className="mx-4 font-normal">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
