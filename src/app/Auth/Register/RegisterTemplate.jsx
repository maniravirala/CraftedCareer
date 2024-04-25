import React, { useState } from "react";
import Input from "../../../components/Inputs/Input";
import { Link } from "react-router-dom";
import AuthService from "../../../mongoDB/AuthService";

const RegisterTemplate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loading, error, registerUser } = AuthService();
  const [errors, setErrors] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      registerUser({ name, email, password, confirmPassword });
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    const maxLength = password.length >= 8;

    let passwordError = "";
    if (!hasUpperCase) {
      passwordError += "an uppercase letter, ";
    }
    if (!hasLowerCase) {
      passwordError += "a lowercase letter, ";
    }
    if (!hasDigit) {
      passwordError += "a digit, ";
    }
    if (!hasSpecialChar) {
      passwordError += "a special character, ";
    }
    if (!maxLength) {
      passwordError += "8 characters, ";
    }
    return passwordError === ""
      ? true
      : `Password must contain ${passwordError.slice(0, -2)}.`;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword ? true : "Passwords do not match.";
  };

  const validateForm = () => {
    const errors = {};
    if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (validatePassword(password) !== true) {
      errors.password = validatePassword(password);
    }
    if (validateConfirmPassword(password, confirmPassword) !== true) {
      errors.confirmPassword = validateConfirmPassword(
        password,
        confirmPassword
      );
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleConfirmPasswordBlur = () => {
    validateConfirmPassword(password, confirmPassword);
  };

  const handlePasswordBlur = () => {
    validatePassword(password);
  };

  return (
    <div className="w-full h-full mx-auto ">
      <div className="h-full bg-white rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign up
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{"  "}
              <Link
                className="text-blue-600 decoration-2 hover:underline font-medium"
                to={"/login"}
              >
                Log in
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <form onSubmit={onSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      name={"name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      attributes={{
                        required: true,
                      }}
                      className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
                      disabled={loading}
                    />
                  </div>
                </div>
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
                      onChange={(e) => setEmail(e.target.value)}
                      attributes={{
                        required: true,
                      }}
                      className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
                      disabled={loading}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-2">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <Input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={handlePasswordBlur}
                      attributes={{
                        required: true,
                      }}
                      className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
                      disabled={loading}
                    />

                    {errors.password && (
                      <p className="text-xs text-red-600 mt-2">
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Confirm Password
                    </label>
                  </div>

                  <div className="relative">
                    <Input
                      type="password"
                      name="confirm-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onBlur={handleConfirmPasswordBlur}
                      attributes={{
                        required: true,
                      }}
                      className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
                      disabled={loading}
                    />
                    {errors.confirmPassword && (
                      <p className="text-xs text-red-600 mt-2">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>

                {error && <p className="text-xs text-red-600 mt-2">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  text-white disabled:opacity-50 disabled:pointer-events-none bg-primary hover:bg-secondary dark:bg-primary-dark dark:hover:bg-secondary ${
                    loading ? "cursor-not-allowed " : ""
                  }`}
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterTemplate;
