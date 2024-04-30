import React, { useState } from "react";
import moment from "moment/moment";
import axios from "axios";

import { refer2, notFound, avatar } from "../../assets";
import Input from "../../components/Inputs/Input";
import Links from "../../assets/links";
import toast from "react-hot-toast";

const ReferHistory = ({ referalDetails }) => {
  const referredUsers = referalDetails.referredUsers || [];

  if (referredUsers.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 m-6">
        <h1 className="text-xl font-semibold">Referral History</h1>
        <img src={notFound} alt="not found" className="w-1/2" />
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          No referrals made yet
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold p-6 pb-0">Referral History</h1>
        <div className="flex flex-col gap-4 max-h-96 overflow-y-auto pr-4 p-6 pt-0">
          {referredUsers.map((user, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-background dark:bg-gray-700 shadow-lg rounded-lg lg:p-3 p-2"
            >
              <div className="flex lg:w-auto lg:flex-row lg:items-center gap-4">
                <img
                  src={user.pic || avatar}
                  alt="profile"
                  className="rounded-full lg:h-10 lg:w-10 h-8 w-8 m-auto"
                />
                <div className="flex flex-col items-start gap-0">
                  <h1 className="text-sm font-semibold">{user.name}</h1>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    Joined on {moment(user.date).format("DD MMM YYYY")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

const ReferAndEarn = ({ referalDetails }) => {
  const [referralCodeCopied, setReferralCodeCopied] = useState(false);
  const [email, setEmail] = useState("");

  const referralCode = referalDetails.code || "Loading...";

  const handleCopyReferralCode = () => {
    const tempInput = document.createElement("input");
    tempInput.value = referralCode;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setReferralCodeCopied(true);
    setTimeout(() => {
      setReferralCodeCopied(false);
    }, 2000);
  };

  const handleSendInvitation = () => {
    // Implement email invitation logic here
    const toastLoading = toast.loading("Sending invitation...");
    try {
      axios
        .post(Links.API.SEND_INVITAION, { email }, { withCredentials: true })
        .then((response) => {
          if (response.status === 200) {
            toast.dismiss(toastLoading.id);
            toast.success(response.data.message);
          }
        })
        .catch((err) => {
          toast.dismiss(toastLoading.id);
          toast.error("Error sending invitation");
        });
    } catch (err) {
      toast.dismiss(toastLoading.id);
      toast.error("Error sending invitation");
    }
  };

  return (
    <>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="lg:text-6xl sm:text-4xl text-2xl font-semibold">
            Refer a friend and earn one credit
          </h1>
          {/* Place illustration here for refer and earn */}
          <img src={refer2} alt="refer" className="w-1/2" />
        </div>
        <div className="flex gap-4 mt-4 justify-center lg:flex-row flex-col sm:mx-10">
          <div className="flex flex-col items-center gap-2 lg:w-1/2 w-full">
            {/* Send invitations heading with input box to send invitations */}
            <h1 className="text-xl font-semibold">Send Invitations</h1>
            <div className="flex items-center gap-2 w-full">
              <Input
                placeholder="Enter email address"
                className="bg-gray-100 dark:bg-gray-700 rounded-lg"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-primary text-white py-2 px-6 rounded-lg h-full hover:bg-primary-dark transition duration-300 ease-in-out"
                onClick={() => handleSendInvitation()}
              >
                Send
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 lg:w-1/2 w-full">
            {/* Share referral code heading with input box to share referral code */}
            <h1 className="text-xl font-semibold">Share Referral Code</h1>
            <div className="relative flex items-center gap-2 w-full">
              <button
                className="bg-gray-100 dark:bg-gray-700 rounded-lg select-none peer block w-full p-3 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-0 appearance-none"
                onClick={
                  referralCodeCopied ? undefined : handleCopyReferralCode
                }
              >
                {referralCode}
              </button>
              {referralCodeCopied && (
                <div className="absolute right-10 bg-success_mani dark:bg-success_mani-dark text-white px-2 py-1 rounded-md shadow-lg jello-horizontal">
                  Code Copied
                </div>
              )}
              {/* <button
                className="bg-primary text-white py-2 px-6 rounded-lg h-full hover:bg-primary-dark transition duration-300 ease-in-out"
                onClick={handleCopyReferralCode}
              >
                {referralCodeCopied ? "Copied!" : "Copy"}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ReferHistory, ReferAndEarn };
