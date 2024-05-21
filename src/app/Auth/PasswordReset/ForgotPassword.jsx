import React, { useState } from "react";
import Links from "../../../assets/Data/links";
import toast from "react-hot-toast";
import Input from "../../../components/Inputs/Input";
import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement password reset logic here
    const loadingToast = toast.loading("Sending reset link...");
    axiosInstance
      .post(Links.API.FORGOT_PASSWORD, { email }, { withCredentials: true })
      .then((res) => {
        if (res.error) {
          toast.dismiss(loadingToast.id);
          toast.error(res.error);
          return;
        }
        toast.dismiss(loadingToast.id);
        toast.success(res.message);
      })
      .catch((error) => {
        toast.dismiss(loadingToast.id);
        if (error.response && error.response.status === 429) {
          toast.error(error.response.data.error);
        } else {
          toast.error(error.message);
        }
      });
  };

  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto ">
      <div className="h-full flex">
        <div className="flex-1 m-auto max-w-lg bg-white rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Forgot password?
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                Remember your password?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Log in
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <Input
                        type="email"
                        name={"email"}
                        value={email}
                        onChange={handleEmailChange}
                        attributes={{
                          required: true,
                        }}
                        className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
