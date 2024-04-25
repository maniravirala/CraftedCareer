import { message } from "antd";
import React, { useState } from "react";
import { refer2 } from "../../assets";
import Input from "../../components/Inputs/Input";

const ReferAndEarn = () => {
  const [referralCodeCopied, setReferralCodeCopied] = useState(false);
  const [email, setEmail] = useState("");

  const referralCode = "REFERRALCODE123";

  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    setReferralCodeCopied(true);
    setTimeout(() => {
      setReferralCodeCopied(false);
    }, 2000);
  };

  const handleSendInvitation = () => {
    // Implement email invitation logic here
    message.success(`Invitation sent to ${email}`);
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
        <div className="flex gap-4 mt-4 justify-center lg:flex-row flex-col mx-10">
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
            <div className="flex items-center gap-2 w-full">
              <Input
                value={referralCode}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg" 
                attributes={{ readOnly: true }}
                onChange={() => {}}
              />
              <button
                className="bg-primary text-white py-2 px-6 rounded-lg h-full hover:bg-primary-dark transition duration-300 ease-in-out"
                onClick={handleCopyReferralCode}
              >
                {referralCodeCopied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ReferAndEarn;
