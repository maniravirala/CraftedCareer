import React, { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import {
  template1,
  template2,
  template3,
  template4,
  template5,
  template6,
} from "../assets";

const templates = [
  {
    id: 1,
    name: "LPU Format",
    description:
      "A sleek and professional template for showcasing your skills and experience.",
    image: template1,
  },
  {
    id: 2,
    name: "Professional",
    description: "A modern and creative template with unique design elements.",
    image: template2,
  },
  {
    id: 3,
    name: "Creative",
    description:
      "A creative and visually appealing template for making a lasting impression.",
    image: template3,
  },
  {
    id: 4,
    name: "Simple",
    description:
      "A simple and clean template that is easy to read and navigate.",
    image: template4,
  },
  {
    id: 5,
    name: "Elegant",
    description:
      "An elegant and stylish template that is perfect for professionals.",
    image: template5,
  },
  {
    id: 6,
    name: "Classic",
    description:
      "A classic and timeless template that is suitable for any industry.",
    image: template6,
  },
];

const TemplateCard = ({ template }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg group transition-all duration-300 transform hover:scale-105">
    <img
      src={template.image}
      alt={template.name}
      className="object-cover w-full h-72 sm:h-96 rounded-xl"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="px-4 py-2 text-white font-semibold bg-primary rounded-full hover:bg-secondary transition-all duration-200">
          Choose Template
        </button>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 py-2 px-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        {template.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{template.description}</p>
    </div>
  </div>
);


const TemplateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? templates.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === templates.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        <button
          onClick={goToPrevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        >
          <BiLeftArrow size={24} />
        </button>
        <div className="flex overflow-x-auto">
          {templates.map((template, index) => (
            <TemplateCard
              key={template.id}
              template={template}
              isActive={index === currentIndex}
            />
          ))}
        </div>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        >
          <BiRightArrow size={24} />
        </button>
      </div>
    </div>
  );
};

export default TemplateCarousel;