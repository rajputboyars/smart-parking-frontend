"use client"; // This component uses client-side interactivity for the button.

import React from "react";
import { Play } from "lucide-react"; // Using lucide-react for the play icon
import MaxWidthContainer from "../MaxWidthContainer";

function PayForParkingSection() {
  return (
    <section className="relative bg-white py-5">
      <MaxWidthContainer>
        <div className="container mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-xl max-w-6xl mx-auto">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/PayForParkingSectionImage.webp')`, // Replace with your actual image URL
                backgroundBlendMode: "multiply",
                backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for text readability
              }}
            >
              {/* Optional: Additional overlay for more control */}
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
              {/* Left Content - Text and Button */}
              <div className="text-white text-center md:text-left max-w-xl mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Easily pay for parking from your phone
                </h2>
                <p className="text-base md:text-lg mb-6">
                  No change? Quickly pay for on-street parking right from your
                  mobile device. Watch the video to learn how simple parking
                  with ParkMobile can be.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-colors duration-200">
                  Learn more
                </button>
              </div>

              {/* Right Content - Play Button */}
              <div className="flex-shrink-0">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                  aria-label="Play video"
                >
                  <Play className="h-12 w-12" fill="currentColor" />{" "}
                  {/* fill="currentColor" makes the icon inherit text color */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export default PayForParkingSection;
