import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Links from "../../../assets/Data/links";
import toast from "react-hot-toast";
import Input from "../../../components/Inputs/Input";
import axiosInstance from "../../../utils/axiosInstance";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { id, token } = useParams();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword)
      return toast.error("Passwords do not match");
    const loadingToast = toast.loading("Resetting password...");
    axiosInstance.post(Links.API.RESET_PASSWORD.replace(":id", id).replace(":token",token), {password}, { withCredentials: true })
      .then((res) => {
        if (res.error) {
          toast.dismiss(loadingToast.id);
          toast.error(res.error);
          return;
        }
        toast.dismiss(loadingToast.id);
        toast.success(res.message);
        navigate("/login");
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

  // return (
  //   <div>
  //     <h2>Reset Password</h2>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         New Password:
  //         <input
  //           type="password"
  //           value={password}
  //           onChange={handlePasswordChange}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Confirm Password:
  //         <input
  //           type="password"
  //           value={confirmPassword}
  //           onChange={handleConfirmPasswordChange}
  //         />
  //       </label>
  //       <br />
  //       <button type="submit">Reset Password</button>
  //     </form>
  //   </div>
  // );
  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto ">
      <div className="h-full flex">
        <div className="flex-1 m-auto max-w-lg bg-white rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Reset password
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
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      New Password
                    </label>
                    <div className="relative">
                      <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        attributes={{
                          required: true,
                        }}
                        className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark"
                        inputClassName="pr-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark"
                        inputClassName="pr-10"
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

export default ResetPassword;
