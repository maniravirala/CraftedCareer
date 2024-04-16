import React from "react";
import "./styles.css";

const GetHTML = () => {
  return (
    <div className="App font-poppins">
      <div className="resume">
        <div className="bg-red-500 p-4">
          <h1 className="text-3xl font-bold">Resume</h1>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold">Personal Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold">Name:</p>
              <p>John Doe</p>
            </div>
            <div>
              <p className="font-bold">Email:</p>
              <p>ReactDOMServer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetHTML;
