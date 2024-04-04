import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <div className="flex bg-[#eaeef6] shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
      <div className="w-1/2 flex justify-center items-center">
        <h3 className="text-xl font-semibold"> RESUME BuiLDER</h3>
      </div>

      <nav className="flex w-1/2 flex-row gap-8 justify-evenly items-center h-16 px-4">
        <Link to="/dashboard" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link to="/resume" className="text-blue-600 hover:underline">
          Resume
        </Link>
        <div>
          {userLoggedIn ? (
            <>
              <button
                onClick={() => {
                  doSignOut().then(() => {
                    navigate("/login");
                  });
                }}
                className="text-blue-600 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
              <Link
                to="/register"
                className="text-blue-600 hover:underline ml-2"
              >
                Register New Account
              </Link>
            </>
          )}
        </div>
      </nav>

      <div className="w-1/3">

      </div>
    </div>
  );
};

export default Header;
