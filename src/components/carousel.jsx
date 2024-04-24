// Write the component to display the template carousel with the following features:
// - The carousel should display 3 templates at a time.
// - The carousel should automatically move to the next slide every 2 seconds.
// - The carousel should have a previous and next button to navigate between the slides.
// - The carousel should display the name and description of each template in card format.
// - The carousel should display the image of each template.
// - The carousel should loop back to the first slide after reaching the last slide.
// - The carousel should have a responsive design that adjusts to different screen sizes (e.g., mobile, tablet, desktop).
// - The carousel should have a gap of 10px between each template card.
// - The carousel should have a padding of 4px and a border radius of 8px for each template card.
// - The carousel should have a background color of #00000010 for each template card.
// - The carousel should have a background color of slate-700 for the previous and next buttons.
// - The carousel should have a text color of white for the previous and next buttons.
// - The carousel should have a width of 80% of the parent container.
// - The carousel should have a fade-in effect when transitioning between slides.
// - The carousel should have a fade-in effect when transitioning between slides.

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
    name: "Template 1",
    description: "Professional Resume Template",
    image: template1,
  },
  {
    id: 2,
    name: "Template 2",
    description: "Creative Resume Template",
    image: template2,
  },
  {
    id: 3,
    name: "Template 3",
    description: "Modern Resume Template",
    image: template3,
  },
  {
    id: 4,
    name: "Template 4",
    description: "Elegant Resume Template",
    image: template4,
  },
  {
    id: 5,
    name: "Template 5",
    description: "Simple Resume Template",
    image: template5,
  },
  {
    id: 6,
    name: "Template 6",
    description: "Classic Resume Template",
    image: template6,
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % templates.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const getSlideIndex = (index) => {
    return (currentSlide + index + templates.length) % templates.length;
  };

  return (
    <div className="relative w-80 mx-auto">
      <div className="flex">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="w-1/3 px-2"
            style={{
              opacity: index === 1 ? 1 : 0, // Show the middle slide with full opacity
              transition: "opacity 0.5s",
            }}
          >
            <div className="bg-gray-100 p-4 rounded-md">
              <img
                src={templates[getSlideIndex(index)].image}
                alt={templates[getSlideIndex(index)].name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">
                {templates[getSlideIndex(index)].name}
              </h3>
              <p className="text-sm text-gray-500">
                {templates[getSlideIndex(index)].description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          setCurrentSlide(
            (currentSlide - 1 + templates.length) % templates.length
          )
        }
        className="absolute top-1/2 left-0 z-10 px-4 py-2 text-white bg-slate-700 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={() => setCurrentSlide((currentSlide + 1) % templates.length)}
        className="absolute top-1/2 right-0 z-10 px-4 py-2 text-white bg-slate-700 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
