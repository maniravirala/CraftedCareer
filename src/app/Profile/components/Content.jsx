import React from "react";
import ProfileContent from "./ProfileContent";
import ReferAndEarn from "./ReferAndEarn";
import DownloadHistory from "./DownloadHistory";
import AccountSettings from "./AccountSettings";
import HelpAndSupport from "./HelpAndSupport";

const Content = ({ activeContent }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-md h-[calc(100vh-4rem-2rem)] overflow-y-auto">
      {activeContent === "profile" && <ProfileContent />}
      {activeContent === "refer" && <ReferAndEarn />}
      {activeContent === "download-history" && <DownloadHistory />}
      {activeContent === "account-settings" && <AccountSettings />}
      {activeContent === "help-support" && <HelpAndSupport />}
    </div>
  );
};

export default Content;
