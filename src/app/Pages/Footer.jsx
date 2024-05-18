import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              About Us
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We are a team of professionals who are passionate about helping
              you create a professional resume.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Contact Us
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              <Link to="/contact">
                <button className="text-blue-500">Send us a message</button>
              </Link>
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              <Link to="/feedback">
                <button className="text-blue-500">Feedback Form</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
