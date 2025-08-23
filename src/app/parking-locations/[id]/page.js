"use client";

import { useEffect, useState } from "react";
import { MapPin, ArrowLeft } from "lucide-react";
import MaxWidthContainer from "@/components/MaxWidthContainer";

function ParkingSlotDetailPage({ params }) {
  const { id } = params;

  const allLocations = Array.from({ length: 25 }, (_, i) => {
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

  const [location, setLocation] = useState(null);

  useEffect(() => {
    const found = allLocations.find((loc) => loc.id === id);
    setLocation(found);
  }, [id]);

  if (!location) {
    return <div className="text-center p-10">Loading or Invalid Location</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <MaxWidthContainer>
        <main className="py-12">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-green-700 hover:text-green-900 mb-6"
          >
            <ArrowLeft className="mr-2" /> Back to Locations
          </button>

          <h1 className="text-3xl font-bold mb-2">{location.name}</h1>
          <p className="flex items-center text-gray-600 mb-6">
            <MapPin className="h-5 w-5 mr-2 text-green-600" />
            {location.address}
          </p>

          {/* Parking Slots Grid */}
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-semibold mb-4">Parking Slots</h2>
            <p className="mb-4 text-gray-500">
              Green = Available, Gray = Occupied
            </p>
            {location.parkingSlots.map((row, rowIndex) => (
              <div key={rowIndex} className="flex mb-2">
                {row.map((slot, colIndex) => (
                  <div
                    key={colIndex}
                    className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-xs font-bold mx-1 rounded-md ${
                      slot
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-800"
                    }`}
                  >
                    {slot ? `A${colIndex + 1}` : `O${colIndex + 1}`}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">About this Location</h2>
            <p className="text-gray-700">{location.description}</p>
          </div>
        </main>
      </MaxWidthContainer>
    </div>
  );
}

export default ParkingSlotDetailPage;
