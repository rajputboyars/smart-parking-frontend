"use client"; // This component uses client-side interactivity for the carousel functionality.

import React, { useState, useEffect, useRef, use } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Using lucide-react for arrow icons
import MaxWidthContainer from "../MaxWidthContainer";

function AwardsAccoladesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const awards = [
    {
      id: 1,
      name: "Top Work Places 2023",
      imageUrl: "/images/AwardsImage1.webp",
    },
    {
      id: 2,
      name: "2022 Stevie Winner - Gold",
      imageUrl: "/images/AwardsImage3.jpg",
    },
    {
      id: 3,
      name: "2022 Stevie Winner - Silver",
      imageUrl: "/images/AwardsImage2.jpg",
    },
    {
      id: 4,
      name: "2021 Stevie Winner - Bronze",
      imageUrl: "/images/AwardsImage4.jpeg",
    },
    {
      id: 5,
      name: "Another Award 1",
      imageUrl: "/images/AwardsImage5.jpg",
    },
    {
      id: 6,
      name: "Another Award 2",
      imageUrl: "/images/AwardsImage6.jpeg",
    },
    {
      id: 7,
      name: "Another Award 1",
      imageUrl: "/images/AwardsImage7.webp",
    },
    {
      id: 8,
      name: "Another Award 2",
      imageUrl: "/images/AwardsImage8.jpg",
    },
  ];

  // Number of items to show at once (adjust based on design)
  const itemsPerPage = 3;

  // Calculate total number of pages
  const totalPages = Math.ceil(awards.length / itemsPerPage);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  // Adjust transform for smooth sliding
  const getTransformValue = () => {
    return `translateX(-${currentIndex * (100 / itemsPerPage)}%)`;
  };

  useEffect(() => {
    setInterval(() => {
      goToNext();
    }, 2000);
  }, []);

  return (
    <section className="bg-white">
      <MaxWidthContainer>
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
            Awards & Accolades
          </h2>

          <div className="relative flex items-center justify-center max-w-6xl mx-auto">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute -left-20 z-10 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-200"
              aria-label="Previous award"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden w-full">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: getTransformValue() }}
              >
                {awards.map((award) => (
                  <div
                    key={award.id}
                    className="flex-shrink-0 w-50 h-50 flex justify-center items-center p-4"
                    style={{ width: `${100 / itemsPerPage}%` }} // Each item takes up a fraction of the visible width
                  >
                    <img
                      src={award.imageUrl}
                      alt={award.name}
                      className="w-full h-full object-contain rounded-md"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/200x200/cccccc/000000?text=Error";
                        e.currentTarget.alt = "Image not found";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute -right-20 z-10 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-200"
              aria-label="Next award"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Dots (Optional, if needed for this type of swiper) */}
          {/* For this "all visible icons move" type, dots might be less common, but included if desired */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-200 ${
                  currentIndex === index ? "bg-gray-800 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export default AwardsAccoladesSection;
