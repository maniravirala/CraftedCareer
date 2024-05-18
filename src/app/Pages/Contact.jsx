import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import TextAreaMani from "../../components/Inputs/TextAreaMani";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto flex items-center justify-center">
      <div className="flex-1 max-w-md bg-white p-4 sm:p-7 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-y-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm mb-1 dark:text-white"
              >
                Name:
              </label>
              <Input
                type={"text"}
                name={"name"}
                value={formData.name}
                onChange={handleChange}
                placeholder={"Enter your name"}
                attributes={{
                  required: true,
                }}
                className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-1 dark:text-white"
              >
                Email:
              </label>
              <Input
                type={"email"}
                name={"email"}
                value={formData.email}
                onChange={handleChange}
                placeholder={"Enter your email"}
                attributes={{
                  required: true,
                }}
                className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm mb-1 dark:text-white"
              >
                Message:
              </label>
              <TextAreaMani
                name={"message"}
                value={formData.message}
                onChange={handleChange}
                placeholder={"Enter your message"}
                attributes={{
                  required: true,
                }}
                className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
              />
            </div>
          </div>

          <button
            type="submit"
            // className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
