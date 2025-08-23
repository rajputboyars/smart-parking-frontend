"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import Link from "next/link";

function ParkingLocationsPage() {
  const parkingLocationsData = Array.from({ length: 25 }, (_, i) => {
    const parkingSlots = Array(5)
      .fill(null)
      .map(() =>
        Array(10)
          .fill(null)
          .map(() => Math.random() > 0.7)
      );

    return {
      id: `location-${i + 1}`,
      name: `ParkMobile Lot ${i + 1}`,
      address: `${(i * 3 + 100)
        .toString()
        .padStart(3, "0")} Main St, Cityville, CA 90210`,
      description: `A convenient parking lot in the heart of Cityville.`,
      imageUrl: `https://placehold.co/400x250/000000/ffffff?text=Parking+Lot+${
        i + 1
      }`,
      parkingSlots,
    };
  });

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLocations = parkingLocationsData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(parkingLocationsData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <MaxWidthContainer>
        <main className="container mx-auto py-12">
          <h1 className="text-4xl font-bold text-center mb-12">
            Find Parking Locations
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentLocations.map((location) => (
              <Link
                href={`/parking-locations/${location.id}`}
                key={location.id}
              >
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition h-full flex flex-col cursor-pointer">
                  <img
                    src={location.imageUrl}
                    alt={location.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-semibold mb-2">
                      {location.name}
                    </h2>
                    <p className="text-gray-600 flex items-center mb-4 flex-grow">
                      <MapPin className="h-5 w-5 text-green-600 mr-2" />
                      {location.address}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronLeft />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-md font-medium ${
                  currentPage === i + 1
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronRight />
            </button>
          </div>
        </main>
      </MaxWidthContainer>
    </div>
  );
}

export default ParkingLocationsPage;
