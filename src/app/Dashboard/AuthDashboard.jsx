import React from "react";
import { useAuth } from "../../contexts/authContext"; 
import PublicDashboard from "./PublicDashboard";

const Dashboard = () => {
  const { currentUser } = useAuth();  
  
  if (!currentUser) {
    return <PublicDashboard />;
  }
  
  return (
    <>
      <div className="text-2xl font-bold pt-14 h-[calc(100vh-4rem)] overflow-auto">
        Hello{" "}
        {currentUser.displayName ? currentUser.displayName : currentUser.email},
        you are now logged in.
      </div>
    </>
  );
};

export default Dashboard;
