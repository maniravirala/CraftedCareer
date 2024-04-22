import React from "react";
import { Carousel } from "antd";
import { BiLogoFacebook, BiLogoGoogle, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

const LeftDesignTemplate = () => {
  const contentStyle = {
    height: "80px",
    // width: "40%",
    color: "#fff",
    // lineHeight: "10px",
    textAlign: "center",
    // background: "#364d79",
  };
  return (
    <div
      className="hidden xl:block w-2/3 h-full absolute left-0 top-0 -z-[0] bg-secondary dark:bg-secondary-dark" //bg-[#6495ed]
      style={{ clipPath: "polygon(100% 0, 75% 100%, 0 100%, 0 0)" }}
    >
      <div className="flex flex-col justify-between h-full p-8">
        <div className="flex">
          <h1 className="text-4xl font-semibold p-4 text-white">
            Craft My Resume
          </h1>
        </div>

        {/* here i want to add any animation */}
        <Carousel autoplay className="w-[80%]">
          <div>
            <h3
              style={contentStyle}
              className="text-2xl font-semibold text-white p-4"
            >
              Easy-to-Use Templates
            </h3>
          </div>
          <div>
            <h3
              style={contentStyle}
              className="text-2xl font-semibold text-white p-4"
            >
              Professional Designs
            </h3>
          </div>
          <div>
            <h3
              style={contentStyle}
              className="text-2xl font-semibold text-white p-4"
            >
              Export to PDF, Word, and More
            </h3>
          </div>
          <div>
            <h3
              style={contentStyle}
              className="text-2xl font-semibold text-white p-4"
            >
              Stand Out: Tips for Creating a Standout Resume
            </h3>
          </div>
          <div>
            <h3
              style={contentStyle}
              className="text-2xl font-semibold text-white p-4"
            >
              Company Mission/Vision: Helping You Build Your Career
            </h3>
          </div>
          <div>
            <h3
              style={contentStyle}
              className="text-2xl font-semibold text-white p-4"
            >
              How It Works: Simple Steps to Create Your Resume
            </h3>
          </div>
        </Carousel>

        <div>
          {/* Group of social media icons */}
          <ul className="flex gap-x-2 p-4">
            <li className="flex items-center gap-x-2 p-2 bg-background dark:bg-background-dark rounded-full">
              <BiLogoFacebook className="text-secondary dark:text-primary text-2xl" />
            </li>
            <li className="flex items-center gap-x-2 p-2 bg-background dark:bg-background-dark rounded-full">
              <BiLogoGoogle className="text-secondary dark:text-primary text-2xl" />
            </li>
            <li className="flex items-center gap-x-2 p-2 bg-background dark:bg-background-dark rounded-full">
              <BiLogoTwitter className="text-secondary dark:text-primary text-2xl" />
            </li>
            <li className="flex items-center gap-x-2 p-2 bg-background dark:bg-background-dark rounded-full">
              <BiLogoInstagram className="text-secondary dark:text-primary text-2xl" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftDesignTemplate;
