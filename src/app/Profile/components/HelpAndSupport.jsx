import React from "react";
import { useState } from "react";
import Input from "../../../components/Inputs/Input";
import TextAreaMani from "../../../components/Inputs/TextAreaMani";
import toast from "react-hot-toast";
import axiosInstance from "../../../utils/axiosInstance";

const HelpAndSupport = () => {
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosInstance
      .post("/api/message/sendContactSupport", { query, email, message })
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
          return;
        }
        toast.success(res.message);
        setQuery("");
        setEmail("");
        setMessage("");
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="max-w-7xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Help & Support</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
        <div className="space-y-4">
          <div className="p-4 bg-background dark:bg-gray-700 shadow-md rounded-md">
            <h3 className="text-xl font-semibold">How do I create a resume?</h3>
            <p>
              To create a resume, go to the 'Create Resume' section and fill in
              the required details. You can customize the layout and design
              using the available templates.
            </p>
          </div>
          <div className="p-4 bg-background dark:bg-gray-700 shadow-md rounded-md">
            <h3 className="text-xl font-semibold">
              How can I download my resume?
            </h3>
            <p>
              You can download your resume by clicking the 'Download' button on
              your resume's view page. Choose the format you prefer, and your
              resume will be downloaded.
            </p>
          </div>
          <div className="p-4 bg-background dark:bg-gray-700 shadow-md rounded-md">
            <h3 className="text-xl font-semibold">How do I contact support?</h3>
            <p>
              If you need assistance, you can contact our support team using the
              form below or email us directly at support@resumebuilder.com.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="query" className="block text-lg font-medium">
              Your Query
            </label>
            <Input
              type="text"
              name={"query"}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-background dark:bg-gray-700 dark:text-gray-300"
              disabled={loading}
              attributes={{ required: true }}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Your Email
            </label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background dark:bg-gray-700 dark:text-gray-300"
              disabled={loading}
              attributes={{ required: true }}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <TextAreaMani
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="disabled:bg-slate-600 bg-background dark:bg-gray-700 dark:text-gray-300 max-h-44 overflow-y-auto resize-none"
              disabled={loading}
              attributes={{ required: true, rows: 4 }}
            ></TextAreaMani>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-600"
              disabled={loading}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default HelpAndSupport;
