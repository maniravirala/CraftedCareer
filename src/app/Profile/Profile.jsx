import React, { useEffect, useState } from "react";
import axios from "axios";
import Links from "../../assets/Data/links";
import toast from "react-hot-toast";

import ProfileCard from "./components/ProfileCard";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useLocation } from "react-router-dom";

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

  const location = useLocation();
  const [activeContent, setActiveContent] = useState(
    location.pathname.substring(1)
  );

  useEffect(() => {
    setActiveContent(location.pathname.substring(1));
  }, [location]);

  if (true) {
    return (
      <div className="h-[calc(100vh-4rem)] overflow-y-auto flex flex-col md:flex-row bg-transparent">
        <div className="md:w-1/4 m-4 space-y-4 md:overflow-y-auto rounded-md">
          <ProfileCard referalDetails={referalDetails} />
          <div className="hidden md:block bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md rounded-lg mt-4">
            <Sidebar
              setActiveContent={setActiveContent}
              activeContent={activeContent}
            />
          </div>
        </div>
        <div className="flex-1 p-4 md:pt-4 pt-0">
          <Content activeContent={activeContent} referalDetails={referalDetails} />
        </div>
      </div>
    );
  }
};

export default Profile;
