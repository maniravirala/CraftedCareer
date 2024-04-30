import axios from "axios";
import React, { useState } from "react";
import Links from "../../../assets/links";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement password reset logic here
    const loadingToast = toast.loading("Sending reset link...");
    axios
      .post(Links.API.FORGOT_PASSWORD, { email }, { withCredentials: true })
      .then((res) => {
        toast.dismiss(loadingToast.id);
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.dismiss(loadingToast.id);
        toast.error(error.response.data.message || error.message);
      })
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
