import React, { useState } from "react";
import Input from "../../../components/Inputs/Input";
import { Link } from "react-router-dom";
import AuthService from "../../../mongoDB/AuthService";

const LoginTemplate = () => {
  const { loading, error, loginUser } = AuthService();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    } else {
      setEmailError(null);
      return true;
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    } else {
      setPasswordError(null);
      return true;
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      validateEmail();
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) {
      validatePassword();
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
      loginUser({ email, password });
    }
  };

  return (
    <div className="w-full h-full mx-auto ">
      <div className="h-full bg-white rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Don't have an account yet? {"  "}
              <Link
                className="text-blue-600 decoration-2 hover:underline font-medium"
                to={"/register"}
              >
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <form>
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
                    {emailError && (
                      <p className="text-xs text-red-600 mt-2">{emailError}</p>
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
                    <a
                      className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                      href="../examples/html/recover-account.html"
                    >
                      Forgot password?
                    </a>
                  </div>
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
                    {passwordError && (
                      <p className="text-xs text-red-600 mt-2">{passwordError}</p>
                    )}
                    {error && (
                      <p className="text-xs text-red-600 mt-2">{error}</p>
                    )}
                  </div>
                </div>

                <button
                  onClick={onSubmit}
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  text-white disabled:opacity-50 disabled:pointer-events-none bg-primary hover:bg-secondary dark:bg-primary-dark dark:hover:bg-secondary ${
                    loading ? "cursor-not-allowed " : ""
                  }`}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
