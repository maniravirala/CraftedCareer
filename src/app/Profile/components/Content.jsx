import React from "react";
import ProfileContent from "./ProfileContent";
import ReferAndEarn from "./ReferAndEarn";
import DownloadHistory from "./DownloadHistory";
import AccountSettings from "./AccountSettings";
import HelpAndSupport from "./HelpAndSupport";

const Content = ({ activeContent, referalDetails }) => {
  // const referalDetails = {
  //   code: "REFERRAL_CODE",
  //   referredUsers: [
  //     {
  //       name: "John Doe",
  //       date: "2024-05-11T04:26:33.109Z",
  //       pic: "https://randomuser.me/api/portraits/men/64.jpg",
  //     },
  //     {
  //       name: "Jane Doe",
  //       date: "2024-05-14T04:26:33.109Z",
  //       pic: "https://randomuser.me/api/portraits/men/65.jpg",
  //     },
  //     {
  //       name: "James Doe",
  //       date: "2024-05-15T04:26:33.109Z",
  //     },
  //     {
  //       name: "Jenny Doe",
  //       date: "2024-05-16T04:26:33.109Z",
  //       pic: "https://randomuser",
  //     },
  //     {
  //       name: "Jenny Smith",
  //       date: "2024-05-17T04:26:33.109Z",
  //       pic: "https://randomuser.me",
  //     },
  //     {
  //       name: "John Smith",
  //       date: "2024-05-18T04:26:33.109Z",
  //     },
  //     {
  //       name: "Meera",
  //       date: "2024-05-19T04:26:33.109Z",
  //     },
  //   ],
  // };

  const profileDetails = {
    downloads: 100,
    serverRequests: 500,
    creditPoints: 1000,
    resumeViews: 200,
    completenessScore: 80,
    feedbackCount: 10,
    resumes: 5,
  };

  const downloadHistoryDetails = [
    { uniqueCode: 'abc123', name: 'Resume v1Resume v1Resume v1Resume v1Resume v1Resume v1Resume v1Resume v1Resume v1Resume v1Resume v1Resume v1', date: '2024-05-17T04:26:33.109Z' },
    { uniqueCode: 'def456', name: 'ResumeResumeResumeResumeResumeResumeResumeResumeResumeResumeResumeResumeResumeResumeResumeResume v2', date: '2024-05-20T04:26:33.109Z' },
    { uniqueCode: 'ghi789', name: 'Resume ResumeResumeResume ResumeResumeResumeResume ResumeResumeRdsdsdsdsdsdesumeResume ResumeResumeResume', date: '2024-05-19T04:26:33.109Z' },
    { uniqueCode: 'jkl012', name: 'Resume v4', date: '2024-05-18T04:26:33.109Z' },
    { uniqueCode: 'mno345', name: 'Resume v5', date: '2024-05-17T04:26:33.109Z' },
  ];

  return (
    <div className="p-4 w-full bg-white dark:bg-gray-800 shadow-md rounded-md md:h-[calc(100vh-4rem-2rem)] md:overflow-y-auto">
      {activeContent === "profile" && <ProfileContent profile={profileDetails} />}
      {activeContent === "refer" && (
        <ReferAndEarn referalDetails={referalDetails} />
      )}
      {activeContent === "download-history" && <DownloadHistory downloadHistory={downloadHistoryDetails} />}
      {activeContent === "account-settings" && <AccountSettings />}
      {activeContent === "help-support" && <HelpAndSupport />}
    </div>
  );
};

export default Content;
