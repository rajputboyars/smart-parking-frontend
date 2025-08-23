"use client"; // This component uses client-side interactivity for the hover effect.

import React, { useState } from "react";
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon
import MaxWidthContainer from "../MaxWidthContainer";

function ParkingProviderSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-white py-5">
      <MaxWidthContainer>
        <div className="container mx-auto">
          <div
            className="bg-green-700 text-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Left Section - Text Content */}
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                Are you a parking provider?
              </h2>
              <p className="text-base md:text-lg opacity-90">
                Whether you’ve got a garage to fill, you’re managing parking for
                a big event, or you’re managing a large fleet, ParkMobile
                solutions can help.
              </p>
            </div>

            {/* Right Section - Animated Arrow Button */}
            <div
              className={`flex-shrink-0 ${
                isHovered ? "translate-x-5" : "translate-x-0"
              }`}
            >
              <button
                className={`bg-white text-green-700 p-4 rounded-md shadow-lg flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-transform duration-400 ease-out`}
                aria-label="Learn more about parking solutions"
              >
                <ArrowRight className={`h-8 w-8`} />
              </button>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export default ParkingProviderSection;
