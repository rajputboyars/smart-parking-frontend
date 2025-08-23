"use client"; // This component uses client-side interactivity for hover effects and state management.

import React, { useState } from "react";
import { Search } from "lucide-react"; // Using lucide-react for the search icon
import MaxWidthContainer from "../MaxWidthContainer";

function ParkingByCitySection() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [hoveredCity, setHoveredCity] = useState(null); // State to track which city card is hovered

  const cities = [
    {
      id: "atlanta",
      name: "Atlanta",
      imageUrl: "/images/AtlantaImage.jpeg", // Placeholder for Atlanta image
    },
    {
      id: "washington-dc",
      name: "Washington D.C.",
      imageUrl: "/images/WashingtonImage.jpg", // Placeholder for Washington D.C. image
    },
    // Add more cities as needed
  ];

  return (
    <section className="bg-white py-5">
      <MaxWidthContainer>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left Section - Search and View Locations */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Parking by city
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ParkMobile is making parking easier in over 4,000 locations
                across all major cities in North America.
              </p>
              <div className="flex w-full max-w-md mx-auto lg:mx-0 mb-6">
                <input
                  type="text"
                  placeholder="Search by Location or Venue"
                  className="flex-grow p-3 rounded-l-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-800"
                />
                <button
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-r-md shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  aria-label="Search"
                >
                  <Search className="h-6 w-6" />
                </button>
              </div>

              {/* View Locations Button with Hover Animation */}
              <button
                className="relative bg-green-600 text-white font-semibold py-3 px-8 rounded-md shadow-lg overflow-hidden group focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                <span
                  className={`absolute inset-0 bg-green-700 transition-transform duration-200 ease-out ${
                    isButtonHovered ? "translate-x-0" : "-translate-x-full"
                  }`}
                ></span>
                <span className="relative z-10">View locations</span>
              </button>
            </div>

            {/* Right Section - Popular Cities */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Popular Cities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cities.map((city) => (
                  <div
                    key={city.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group"
                    onMouseEnter={() => setHoveredCity(city.id)}
                    onMouseLeave={() => setHoveredCity(null)}
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={city.imageUrl}
                        alt={city.name}
                        className={`w-full h-48 object-cover transition-transform duration-200 ease-out ${
                          hoveredCity === city.id ? "scale-110" : "scale-100"
                        }`}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://placehold.co/300x200/cccccc/000000?text=Image+Error";
                          e.currentTarget.alt = "Image not found";
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {city.name}
                      </h4>
                      <div className="relative h-0.5 bg-black overflow-hidden">
                        <span
                          className={`absolute inset-0 bg-green-600 transition-transform duration-200 ease-out ${
                            hoveredCity === city.id
                              ? "translate-x-0"
                              : "-translate-x-full"
                          }`}
                        ></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export default ParkingByCitySection;
