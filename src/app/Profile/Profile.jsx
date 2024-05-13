import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReferAndEarn, ReferHistory } from "./Refer";
import Info from "./Info";
import Links from "../../assets/Data/links";
import toast from "react-hot-toast";

const Profile = () => {
  const [referalDetails, setReferalDetails] = useState("");

  const getReferDetails = async () => {
    try {
      const response = await axios.get(Links.API.REFER_DETAILS, {
        withCredentials: true,
      });
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      toast.error("Error fetching data");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getReferDetails();
      if (response) {
        setReferalDetails(response);
      }
      // setReferalDetails(response);
    };
    fetchData();
  }, []);

  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto bg-transparent w-full">
      <div className="m-6 flex gap-4 flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0 flex flex-col gap-4">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <Info referalDetails={referalDetails} />
          </div>
          <div className="hidden lg:block bg-white dark:bg-gray-800 text-background-dark dark:text-background shadow-md rounded-lg">
            <ReferHistory referalDetails={referalDetails} />
          </div>
        </div>
        <div className="w-full lg:w-3/4 flex flex-col gap-4">
          <div className="bg-white dark:bg-gray-800 text-background-dark dark:text-background shadow-md rounded-lg p-6">
            <ReferAndEarn referalDetails={referalDetails} />
          </div>
          <div className="lg:hidden bg-white dark:bg-gray-800 text-background-dark dark:text-background shadow-md rounded-lg">
            <ReferHistory referalDetails={referalDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
