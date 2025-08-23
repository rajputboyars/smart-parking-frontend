"use client"; // This component uses client-side interactivity for the button hover effect.

import React, { useState } from "react";
import MaxWidthContainer from "../MaxWidthContainer";

function ParkingStartingPointSection() {
  const [isVideoButtonHovered, setIsVideoButtonHovered] = useState(false);

  return (
    <section className="bg-white">
      <MaxWidthContainer>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
            {/* Left Section - Text Content and Buttons */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="text-green-700 text-lg font-semibold mb-3">
                About ParkMobile
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Because parking is just a starting point
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At the start, we just wanted to make parking easier. Today,
                we’re the leading provider of parking solutions in the U.S. and
                it’s our mission to make cities more livable.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                {/* See our recent news button */}
                <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                  See our recent news
                </button>

                {/* VIDEO: Smart mobility button with hover animation */}
                <button
                  className="relative bg-green-600 text-white font-semibold py-3 px-6 rounded-md shadow-md overflow-hidden group focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                  onMouseEnter={() => setIsVideoButtonHovered(true)}
                  onMouseLeave={() => setIsVideoButtonHovered(false)}
                >
                  <span
                    className={`absolute inset-0 bg-green-700 transition-transform duration-200 ease-out ${
                      isVideoButtonHovered
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }`}
                  ></span>
                  <span className="relative z-10">VIDEO: Smart mobility</span>
                </button>
              </div>
            </div>

            {/* Right Section - Image of Phone with Car */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
              <img
                src="/images/About-ParkMobile-Parking-App.jpg" // Placeholder for phone and car image
                alt="Phone displaying ParkMobile app with a car"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export default ParkingStartingPointSection;
