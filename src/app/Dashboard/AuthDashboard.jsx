import React from "react";
import { useAuth } from "../../contexts/authContext/AuthContext"; 

const AuthDashboard = () => {
  const { userData } = useAuth();

  return (
    <div className="">
      <div className="text-2xl font-bold pt-14 h-[calc(100vh-4rem)] overflow-auto">
        Hello {userData.name ? userData.name : userData.email}, you are now
        logged in.
      </div>
    </div>
  );
};

export default AuthDashboard;
