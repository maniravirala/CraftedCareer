import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import TextAreaMani from "../../components/Inputs/TextAreaMani";

const FeedBackForm = () => {
  const [formData, setFormData] = useState({
    howDidYouHear: "",
    otherHowDidYouHear: "",
    browser: "",
    otherBrowser: "",
    device: "",
    satisfaction: "",
    feedback: "",
    file: "",
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
    <div className="h-[calc(100vh-4rem)] overflow-auto">
      <div className="flex items-center justify-center">
        <div className="flex-1 max-w-xl  bg-white p-4 sm:p-7 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-y-2">
              <div>
                <label className="block text-sm mb-1 dark:text-white">
                  How did you hear about this website?*
                </label>
                <div className="flex justify-between items-center space-x-4 flex-1">
                  <label className="flex">
                    <input
                      type="radio"
                      required
                      name="howDidYouHear"
                      value="Friend"
                      checked={formData.howDidYouHear === "Friend"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Friend</span>
                  </label>
                  <label className="flex">
                    <input
                      type="radio"
                      required
                      name="howDidYouHear"
                      value="Social Media"
                      checked={formData.howDidYouHear === "Social Media"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Social Media</span>
                  </label>
                  <label className="flex">
                    <input
                      type="radio"
                      required
                      name="howDidYouHear"
                      value="Search Engine"
                      checked={formData.howDidYouHear === "Search Engine"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Search Engine</span>
                  </label>
                  <label className="flex">
                    <input
                      type="radio"
                      required
                      name="howDidYouHear"
                      value="Other"
                      checked={formData.howDidYouHear === "Other"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Other</span>
                  </label>
                </div>
                {formData.howDidYouHear === "Other" && (
                  <Input
                    type={"text"}
                    name={"otherHowDidYouHear"}
                    value={formData.otherHowDidYouHear}
                    onChange={handleChange}
                    placeholder={"Please specify"}
                    attributes={{ required: true }}
                    className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
                  />
                )}
              </div>
              <div>
                <label className="block text-sm mb-1 dark:text-white">
                  What browser do you use?*
                </label>
                <div className="flex justify-between items-center space-x-4">
                  <label className="flex">
                    <input
                      type="radio"
                      required
                      name="browser"
                      value="Chrome"
                      checked={formData.browser === "Chrome"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Chrome</span>
                  </label>
                  <label className="flex">
                    <input
                      type="radio"
                      required
                      name="browser"
                      value="Firefox"
                      checked={formData.browser === "Firefox"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Firefox</span>
                  </label>
                  <label className="flex">
                    <input
                      type="radio"
                      required
                      name="browser"
                      value="Safari"
                      checked={formData.browser === "Safari"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Safari</span>
                  </label>
                  <label className="flex">
                    <input
                      type="radio"
                      required
                      name="browser"
                      value="Other"
                      checked={formData.browser === "Other"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Other</span>
                  </label>
                </div>
                {formData.browser === "Other" && (
                  <Input
                    type={"text"}
                    name={"otherBrowser"}
                    value={formData.otherBrowser}
                    onChange={handleChange}
                    placeholder={"Please specify"}
                    attributes={{ required: true }}
                    className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
                  />
                )}
              </div>
              <div>
                <label
                  htmlFor="device"
                  className="block text-sm mb-1 dark:text-white"
                >
                  Which device did you use to access the website?*
                </label>
                <Input
                  type={"text"}
                  name={"device"}
                  value={formData.device}
                  onChange={handleChange}
                  placeholder={"Enter your device"}
                  attributes={{
                    required: true,
                  }}
                  className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
                />
              </div>
              <div>
                <label className="block text-sm mb-1 dark:text-white">
                  Are you satisfied that you found out the website?*
                </label>
                <select
                  name="satisfaction"
                  value={formData.satisfaction}
                  onChange={handleChange}
                  className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark w-full h-12 rounded-xl p-2 focus:outline-none"
                  required
                >
                  <option value="" className="h-12">
                    Select
                  </option>
                  <option value="5">Very satisfied</option>
                  <option value="4">Satisfied</option>
                  <option value="3">Neutral</option>
                  <option value="2">Unsatisfied</option>
                  <option value="1">Very unsatisfied</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="feedback"
                  className="block text-sm mb-1 dark:text-white"
                >
                  Feedback*
                </label>
                <TextAreaMani
                  name={"feedback"}
                  value={formData.feedback}
                  onChange={handleChange}
                  placeholder={"Provide your feedback here"}
                  attributes={{
                    required: true,
                  }}
                  className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
                />
                <small className="text-xs text-gray-500">
                  Mention issues, features, experience:{" "}
                </small>
              </div>
              <div>
                <label
                  htmlFor="file"
                  className="block text-sm mb-1 dark:text-white"
                >
                  File Upload (optional):
                </label>
                <Input
                  type={"file"}
                  name={"file"}
                  onChange={handleChange}
                  className="bg-tertiary dark:bg-slate-900 dark:text-white text-background-dark "
                />
                <small className="text-xs text-gray-500">
                  Provide Screenshots if there are any issues
                </small>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedBackForm;
