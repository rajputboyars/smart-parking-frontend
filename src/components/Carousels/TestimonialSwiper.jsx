"use client"; // This component uses client-side interactivity for the swiper functionality.

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Using lucide-react for arrow icons
import MaxWidthContainer from "../MaxWidthContainer";

function TestimonialSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Easy to set up, easy to use! I've used it in several cities.",
      author: "Vicki L.",
    },
    {
      id: 2,
      quote: "ParkMobile makes parking a breeze. Highly recommend!",
      author: "John D.",
    },
    {
      id: 3,
      quote: "Never worry about coins again. This app is a lifesaver.",
      author: "Sarah P.",
    },
    {
      id: 4,
      quote: "Convenient and efficient. A must-have for city parking.",
      author: "Michael R.",
    },
  ];

  // Function to go to the next testimonial
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous testimonial
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to go to a specific slide via navigation dots
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white py-5">
      <MaxWidthContainer>
        <div className="container mx-auto">
          <div className="relative bg-green-100 rounded-lg p-8 md:p-12 flex items-center justify-center shadow-xl min-h-[200px] overflow-hidden">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 md:left-8 bg-white text-green-700 p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200 z-10"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>

            {/* Testimonial Content Container */}
            {/* This div holds all testimonials and slides them horizontally */}
            <div
              className="flex w-full h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full text-center px-4 md:px-16 flex flex-col justify-center items-center"
                >
                  <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="text-lg text-gray-600 font-medium">
                    - {testimonial.author}
                  </p>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 md:right-8 bg-white text-green-700 p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200 z-10"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-200 ${
                  currentIndex === index ? "bg-green-600 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export default TestimonialSwiper;
