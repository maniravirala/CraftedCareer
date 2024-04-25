import React, { useState, useEffect } from "react";
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
    name: "Simple",
    description: "A simple and clean template with a modern design.",
    imageUrl: template1,
  },
  {
    id: 2,
    name: "Professional",
    description: "A professional template with a classic design.",
    imageUrl: template2,
  },
  {
    id: 3,
    name: "Creative",
    description: "A creative template with a unique design.",
    imageUrl: template3,
  },
  {
    id: 4,
    name: "Modern",
    description: "A modern template with a sleek design.",
    imageUrl: template4,
  },
  {
    id: 5,
    name: "Minimalist",
    description: "A minimalist template with a clean design.",
    imageUrl: template5,
  },
  {
    id: 6,
    name: "Stylish",
    description: "A stylish template with a sophisticated design.",
    imageUrl: template6,
  },
];

const TemplateCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(templates.length - 1);
  const [nextSlide, setNextSlide] = useState(1);

  // for every 2 seconds, move to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + templates.length) % templates.length);
    setNextSlide((nextSlide - 1 + templates.length) % templates.length);
    setPrevSlide((prevSlide - 1 + templates.length) % templates.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % templates.length);
    setNextSlide((nextSlide + 1) % templates.length);
    setPrevSlide((prevSlide + 1) % templates.length);
  };

  return (
    <div className="flex justify-center items-center dark:text-white text-gray-900">
      <div className="carousel flex flex-row sm:flex-row justify-center gap-10">
        <div className="items-center flex">
          <button
            className="rounded-full bg-slate-700 w-10 h-10 text-white"
            onClick={handlePrevSlide}
          >
            {"<"}
          </button>
        </div>
        <div className="sm:scale-90 carousel-content w-1/3 sm:w-1/5 bg-[#00000010] dark:bg-[#ffffff10] p-4 rounded-lg">
          <img
            src={templates[prevSlide].imageUrl}
            alt="template"
            className="rounded-lg"
          />
          <div className="template-info pt-4">
            <h2 className="text-md font-semibold">
              {templates[prevSlide].name}
            </h2>
            <p className="text-sm">{templates[prevSlide].description}</p>
          </div>
        </div>
        <div
          className={`carousel-content w-1/3 sm:w-1/5 bg-[#00000010] dark:bg-[#ffffff10] p-4 rounded-lg `}
        >
          <img
            src={templates[currentSlide].imageUrl}
            alt="template"
            className="rounded-lg"
          />
          <div className="template-info pt-4">
            <h2 className="text-md font-semibold">
              {templates[currentSlide].name}
            </h2>
            <p className="text-sm">{templates[currentSlide].description}</p>
          </div>
        </div>
        <div className="sm:scale-90 carousel-content w-full sm:w-1/5 sm:block hidden bg-[#00000010] dark:bg-[#ffffff10] p-4 rounded-lg">
          <img
            src={templates[nextSlide].imageUrl}
            alt="template"
            className="rounded-lg"
          />
          <div className="template-info pt-4">
            <h2 className="text-md font-semibold">
              {templates[nextSlide].name}
            </h2>
            <p className="text-sm">{templates[nextSlide].description}</p>
          </div>
        </div>
        <div className="items-center flex">
          <button
            className="rounded-full bg-slate-700 w-10 h-10 text-white"
            onClick={handleNextSlide}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCarousel;
