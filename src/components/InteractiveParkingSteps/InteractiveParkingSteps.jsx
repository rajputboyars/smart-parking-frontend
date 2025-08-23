"use client"; // This component uses client-side interactivity for hover effects and state management.

import React, { useState } from "react";
import { Search } from "lucide-react"; // Using lucide-react for the search icon (if needed, though not directly in this image)
import MaxWidthContainer from "../MaxWidthContainer";

function InteractiveParkingSteps() {
  // State to manage which card is currently "active" (expanded)
  // Initialize with the index of the "Pay & Go" card (index 3) to show it as default expanded
  const [activeCard, setActiveCard] = useState(3);

  const cards = [
    {
      id: 0,
      title: "Enter your zone number",
      number: "1",
      content: (
        <div className="flex flex-col items-center">
          <div className="bg-black text-white p-3 rounded-md text-xl font-bold mb-4">
            17120
          </div>
          <p className="text-sm text-gray-600">
            Find your zone number on signs or the meter.
          </p>
        </div>
      ),
      image: null, // No specific image for this card
    },
    {
      id: 1,
      title: "Set your time",
      number: "2",
      content: (
        <div className="flex flex-col items-center space-y-2">
          <div className="bg-gray-200 text-gray-800 p-2 rounded-md text-sm w-24 text-center">
            1 hour
          </div>
          <div className="bg-gray-200 text-gray-800 p-2 rounded-md text-sm w-24 text-center">
            2 hours
          </div>
          <div className="bg-gray-200 text-gray-800 p-2 rounded-md text-sm w-24 text-center">
            3 hours
          </div>
          <div className="bg-gray-200 text-gray-800 p-2 rounded-md text-sm w-24 text-center">
            4 hours
          </div>
        </div>
      ),
      image: null, // No specific image for this card
    },
    {
      id: 2,
      title: "Select your vehicle",
      number: "3",
      content: (
        <div className="flex flex-col items-center space-y-2">
          <div className="bg-gray-200 text-gray-800 p-2 rounded-md text-sm w-32 text-center">
            NY1-678CMD
          </div>
          <p className="text-xs text-gray-600">Honda Civic</p>
          <div className="bg-gray-200 text-gray-800 p-2 rounded-md text-sm w-32 text-center">
            GA-810BFT
          </div>
          <p className="text-xs text-gray-600">Nissan Altima</p>
        </div>
      ),
      image: null, // No specific image for this card
    },
    {
      id: 3,
      title: "Pay & go",
      number: (
        <img
          src="https://placehold.co/40x40/00b300/ffffff?text=Y" // Placeholder for the 'Y' icon
          alt="ParkMobile Icon"
          className="h-10 w-10 rounded-md"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/40x40/cccccc/000000?text=Y";
          }}
        />
      ),
      content: (
        <div className="flex flex-col items-center">
          <button className="bg-black text-white px-6 py-3 rounded-md font-semibold mb-4">
            Start Parking
          </button>
          {/* Car image, visible only when this card is active */}
          <img
            src="https://placehold.co/150x80/0000FF/ffffff?text=Car" // Placeholder for the blue car image
            alt="Blue Car"
            className={`transition-all duration-500 ease-in-out ${
              activeCard === 3
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          />
        </div>
      ),
      image: null, // Content handles the image
    },
  ];

  return (
    <section className="bg-white py-5">
      <MaxWidthContainer>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
          {/* Left Section - Text Content */}
          <div className="text-center lg:text-left max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              The smarter way to park
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              ParkMobile puts the power to park in your hands. Whether you’re
              looking for a spot now or reserving a spot for later, ParkMobile
              has you covered.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-colors duration-200 mb-4">
              How it works
            </button>
            <p className="text-green-600 hover:underline cursor-pointer text-sm font-medium">
              Learn how to reserve parking
            </p>
          </div>

          {/* Right Section - Interactive Cards */}
          <div className="flex flex-col md:flex-row items-stretch gap-4 w-full max-w-4xl">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`
                flex flex-col items-center justify-between
                bg-green-100 rounded-lg shadow-lg p-6
                transition-all duration-500 ease-in-out
                ${
                  activeCard === index
                    ? "flex-grow-[3] max-w-[400px]"
                    : "flex-grow max-w-[150px]"
                }
                overflow-hidden
                cursor-pointer
                border-2 ${
                  activeCard === index
                    ? "border-green-500"
                    : "border-transparent"
                }
              `}
                onMouseEnter={() => setActiveCard(index)}
                // onMouseLeave={() => setActiveCard(null)} // If you want them to collapse on hover out
              >
                <div
                  className={`
                  flex flex-col items-center text-center
                  transition-opacity duration-300
                  ${
                    activeCard === index
                      ? "opacity-100"
                      : "opacity-0 md:opacity-100"
                  }
                `}
                >
                  {/* Number/Icon at the top */}
                  <div
                    className={`
                  text-5xl font-bold text-green-700 mb-4
                  ${activeCard === index ? "block" : "block"}
                `}
                  >
                    {card.number}
                  </div>

                  {/* Title */}
                  <h3
                    className={`
                  text-xl font-semibold text-gray-800 mb-4
                  ${activeCard === index ? "block" : "hidden md:block"}
                `}
                  >
                    {card.title}
                  </h3>

                  {/* Content (only visible when active) */}
                  <div
                    className={`
                  transition-all duration-500 ease-in-out
                  ${
                    activeCard === index
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }
                `}
                  >
                    {card.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export default InteractiveParkingSteps;
