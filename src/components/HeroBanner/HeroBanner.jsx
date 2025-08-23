"use client"; // This component uses client-side interactivity for the search input.

import React from "react";
import { Search } from "lucide-react"; // Using lucide-react for the search icon
import MaxWidthContainer from "../MaxWidthContainer";

function HeroSection() {
  return (
    <MaxWidthContainer>
      <section className="relative bg-white overflow-hidden rounded-lg shadow-md mx-auto max-w-7xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/HeroBannerImage.webp')`, // Replace with your actual image URL
            backgroundBlendMode: "multiply", // Adjust blend mode as needed
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for text readability
          }}
        >
          {/* Optional: Add an overlay div for more control over darkness */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-40 py-20 md:py-32 text-white flex flex-col items-start justify-center min-h-[400px]">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Park. Pay. Go.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            When you’re on the go, the free ParkMobile app makes it easy to find
            and pay for parking without running back to feed the meter. And for
            added convenience, you can reserve spots ahead of time.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 w-full max-w-3xl">
            {/* Left Section - Get the mobile app */}
            <div className="flex flex-col space-y-2 flex-grow">
              <p className="text-base font-medium">
                Parking's even easier with the app
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-colors duration-200 w-full md:w-auto">
                Get the mobile app
              </button>
            </div>

            {/* Right Section - Search for parking */}
            <div className="flex flex-col space-y-2 flex-grow">
              <p className="text-base font-medium">
                Save time with reserved parking
              </p>
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Search by location or venue"
                  className="flex-grow p-3 rounded-l-md border-none bg-white focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-800"
                />
                <button
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-r-md shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  aria-label="Search"
                >
                  <Search className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthContainer>
  );
}

export default HeroSection;
