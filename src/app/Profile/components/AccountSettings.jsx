import React from "react";
import { motion } from "framer-motion";

const AccountSettings = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 3,
          ease: [0.48, 0.15, 0.25, 0.96]
        }}
        className="text-center p-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
          Account Settings
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Coming Soon!
        </p>
      </motion.div>
    </div>
  );
};

export default AccountSettings;
