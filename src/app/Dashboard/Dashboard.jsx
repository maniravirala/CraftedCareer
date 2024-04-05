import React from "react";
import { useAuth } from "../../contexts/authContext";
import { Spin } from "antd";

const Dashboard = () => {
  const { currentUser } = useAuth();  

  // if (!currentUser) {
  //   return (
  //     <>
  //       <Spin fullscreen />
  //     </>
  //   );
  // }

  return (
    <>
      <div className="text-2xl font-bold pt-14 h-full">
        Hello{" "}
        {currentUser.displayName ? currentUser.displayName : currentUser.email},
        you are now logged in.
      </div>
    </>
  );
};

export default Dashboard;
