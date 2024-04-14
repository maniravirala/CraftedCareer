import React from "react";
import LoginTemplate from "./LoginTemplate";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";
import {
  BiLogoFacebook,
  BiLogoGoogle,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";

import { Carousel } from "antd";

const Login = () => {
  const { userLoggedIn } = useAuth();

  const contentStyle = {
    height: "80px",
    // width: "40%",
    color: "#fff",
    // lineHeight: "10px",
    textAlign: "center",
    // background: "#364d79",
  };

  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto ">{/* bg-background dark:bg-background-dark */}
      {userLoggedIn && <Navigate to={"/dashboard"} replace={true} />}

      <main className="h-full flex self-center place-content-center place-items-center xl:justify-end">
        {/* clip-path: polygon(67% 0, 28% 100%, 0 100%, 0 0); use this for the clip path */}
        <div
          className="hidden xl:block w-2/3 h-screen absolute left-0 top-0 -z-[0] pt-12 bg-secondary dark:bg-secondary-dark" //bg-[#6495ed]
          style={{ clipPath: "polygon(100% 0, 75% 100%, 0 100%, 0 0)" }}
        >
          <div className="flex flex-col justify-between h-full p-8">
            <div className="flex">
              <h1 className="text-4xl font-semibold p-4 text-white">
                RESUME BuiLDER
              </h1>
            </div>

            {/* here i want to add any animation */}
            <Carousel autoplay className="w-[80%]">
              <div>
                <h3
                  style={contentStyle}
                  className="text-2xl font-semibold text-white p-4"
                >
                  Easy-to-Use Templates
                </h3>
              </div>
              <div>
                <h3
                  style={contentStyle}
                  className="text-2xl font-semibold text-white p-4"
                >
                  Professional Designs
                </h3>
              </div>
              <div>
                <h3
                  style={contentStyle}
                  className="text-2xl font-semibold text-white p-4"
                >
                  Export to PDF, Word, and More
                </h3>
              </div>
              <div>
                <h3
                  style={contentStyle}
                  className="text-2xl font-semibold text-white p-4"
                >
                  Stand Out: Tips for Creating a Standout Resume
                </h3>
              </div>
              <div>
                <h3
                  style={contentStyle}
                  className="text-2xl font-semibold text-white p-4"
                >
                  Company Mission/Vision: Helping You Build Your Career
                </h3>
              </div>
              <div>
                <h3
                  style={contentStyle}
                  className="text-2xl font-semibold text-white p-4"
                >
                  How It Works: Simple Steps to Create Your Resume
                </h3>
              </div>
            </Carousel>

            <div>
              {/* Group of social media icons */}
              <ul className="flex gap-x-2 p-4">
                <li className="flex items-center gap-x-2 p-2 bg-background dark:bg-background-dark rounded-full">
                  <BiLogoFacebook className="text-secondary dark:text-primary text-2xl" />
                </li>
                <li className="flex items-center gap-x-2 p-2 bg-background dark:bg-background-dark rounded-full">
                  <BiLogoGoogle className="text-secondary dark:text-primary text-2xl" />
                </li>
                <li className="flex items-center gap-x-2 p-2 bg-background dark:bg-background-dark rounded-full">
                  <BiLogoTwitter className="text-secondary dark:text-primary text-2xl" />
                </li>
                <li className="flex items-center gap-x-2 p-2 bg-background dark:bg-background-dark rounded-full">
                  <BiLogoInstagram className="text-secondary dark:text-primary text-2xl" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="hidden justify-center mx-16 ">
          <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
            <div className="text-center mb-6">
              <div className="mt-2">
                <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">
                  Welcome Back
                </h3>
              </div>
            </div>
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="text-sm text-gray-600 font-bold">Email</label>
                <InputMani
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  attributes={{ required: true, autoComplete: "email" }}
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 font-bold">
                  Password
                </label>
                <InputMani
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  attributes={{
                    required: true,
                    autoComplete: "password",
                  }}
                />
              </div>

              {errorMessage && (
                <span className="text-red-600 font-medium">{errorMessage}</span>
              )}

              <button
                type="submit"
                disabled={isSigningIn}
                className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
                  isSigningIn
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-primary hover:bg-[#6495ed] hover:shadow-xl transition duration-300"
                }`}
              >
                {isSigningIn ? "Signing In..." : "Sign In"}
              </button>
            </form>
            <p className="text-center text-sm">
              Don't have an account?{" "}
              <Link to={"/register"} className="hover:underline font-bold">
                Sign up
              </Link>
            </p>
            <div className="flex flex-row text-center w-full">
              <div className="border-b-2 mb-2.5 mr-2 w-full"></div>
              <div className="text-sm font-bold w-fit">OR</div>
              <div className="border-b-2 mb-2.5 ml-2 w-full"></div>
            </div>
            <button
              disabled={isSigningIn}
              onClick={(e) => {
                onGoogleSignIn(e);
              }}
              className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium  ${
                isSigningIn
                  ? "cursor-not-allowed"
                  : "hover:bg-gray-100 transition duration-300 active:bg-gray-100"
              }`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_17_40)">
                  <path
                    d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                    fill="#34A853"
                  />
                  <path
                    d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {isSigningIn ? "Signing In..." : "Continue with Google"}
            </button>
          </div>
        </div> */}
        <div className="flex w-96 justify-center sm:mx-16">
          <LoginTemplate />
        </div>
      </main>
    </div>
  );
};

export default Login;
