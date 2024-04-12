import React, { useEffect, useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";
import RegisterTemplate from "./RegisterTemplate";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";
import InputMani from "../../../components/Inputs/InputMani";
import {
  BiLogoFacebook,
  BiLogoGoogle,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";

import { Carousel } from "antd";

const Register = () => {
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
    <>
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}

      <main className=" h-[90vh] flex self-center place-content-center place-items-center justify-end">
        <div
          className="hidden md:block w-2/3 h-screen absolute left-0 top-0 -z-[1] pt-12 bg-[#6495ed]"
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
                <li className="flex items-center gap-x-2 p-2 bg-white rounded-full">
                  <BiLogoFacebook className="text-[#6495ed] text-2xl" />
                </li>
                <li className="flex items-center gap-x-2 p-2 bg-white rounded-full">
                  <BiLogoGoogle className="text-[#6495ed] text-2xl" />
                </li>
                <li className="flex items-center gap-x-2 p-2 bg-white rounded-full">
                  <BiLogoTwitter className="text-[#6495ed] text-2xl" />
                </li>
                <li className="flex items-center gap-x-2 p-2 bg-white rounded-full">
                  <BiLogoInstagram className="text-[#6495ed] text-2xl" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center mx-16">
          <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
            <div className="text-center mb-6">
              <div className="mt-2">
                <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">
                  Create a New Account
                </h3>
              </div>
            </div>
            <form onSubmit={onSubmit} className="space-y-4">
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
                  attributes={{ required: true, autoComplete: "password" }}
                  disabled={isRegistering}
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 font-bold">
                  Confirm Password
                </label>
                <InputMani
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setconfirmPassword(e.target.value);
                  }}
                  attributes={{ required: true, autoComplete: "password" }}
                  disabled={isRegistering}
                />
              </div>

              {errorMessage && (
                <span className="text-red-600 font-bold">{errorMessage}</span>
              )}

              {passwordError && (
                <span className="text-red-600 font-bold">
                  Passwords do not match
                </span>
              )}

              <button
                type="submit"
                disabled={isRegistering}
                className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
                  isRegistering
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-primary hover:bg-[#6495ed] hover:shadow-xl transition duration-300"
                }`}
              >
                {isRegistering ? "Signing Up..." : "Sign Up"}
              </button>
              <div className="text-sm text-center">
                Already have an account? {"   "}
                <Link
                  to={"/login"}
                  className="text-center text-sm hover:underline font-bold"
                >
                  Continue
                </Link>
              </div>
            </form>
          </div>
        </div> */}
        <div className="flex justify-center mx-16">
          <RegisterTemplate />
        </div>
      </main>
    </>
  );
};

export default Register;
