import React, { useState } from "react";
import Input from "../../../components/Inputs/Input";
import { Link } from "react-router-dom";
import AuthService from "../../../mongoDB/AuthService";

const RegisterTemplate = () => {
  // const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const { loading, error, registerUser } = AuthService();

  const onSubmit = async (e) => {
    e.preventDefault();
    registerUser({ name, email, password, confirmPassword });
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
            <form>
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
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2">
                    Please include a valid email address so we can get back to
                    you
                  </p>
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
                      attributes={{
                        required: true,
                      }}
                      className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
                      disabled={loading}
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>

                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="password-error"
                  >
                    8+ characters required
                  </p>
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
                      onChange={(e) => setconfirmPassword(e.target.value)}
                      attributes={{
                        required: true,
                      }}
                      className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
                      disabled={loading}
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {error && <p className="text-xs text-red-600 mt-2">{error}</p>}

                <button
                  onClick={onSubmit}
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
