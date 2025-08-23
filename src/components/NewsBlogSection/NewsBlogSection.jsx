"use client";
import MaxWidthContainer from "../MaxWidthContainer";

// This component is client-side as it might contain interactive elements in the future.

function NewsBlogSection() {
  const newsItems = [
    {
      id: 1,
      type: "CASE STUDY",
      title: "Boulder, Colorado",
      date: null, // No date for case study in image
      imageUrl:
        "https://placehold.co/200x250/ffffff/000000?text=Case+Study+Content", // Placeholder for case study image/content
      link: "#",
    },
    {
      id: 2,
      type: null,
      title: "Exploring fall in Seattle: a seasonal delight",
      date: "09.18.24",
      imageUrl:
        "https://placehold.co/250x150/000000/ffffff?text=Seattle+Skyline", // Placeholder for Seattle image
      link: "#",
    },
    {
      id: 3,
      type: null,
      title: "Celebrating Park(ing) Day 2024",
      date: "09.21.24",
      imageUrl: "https://placehold.co/250x150/000000/ffffff?text=Park(ing)+Day", // Placeholder for Park(ing) Day image
      link: "#",
    },
    {
      id: 4,
      type: null,
      title: "The Best of Baltimore: Top attractions and hidden gems",
      date: null, // No date for Baltimore in image
      imageUrl:
        "https://placehold.co/250x150/000000/ffffff?text=Baltimore+Harbor", // Placeholder for Baltimore image
      link: "#",
    },
  ];

  return (
    <section className="bg-white">
      <MaxWidthContainer>
        <div className="container mx-auto">
          {/* Section Heading */}
          <div className="flex items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mr-8">
              ParkMobile news & blog
            </h2>
            {/* Decorative lines (optional, adjust if needed) */}
            <div className="flex-grow border-t-2 border-gray-300 hidden md:block"></div>
          </div>

          {/* News/Blog Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {newsItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200 group"
              >
                <div className="p-4">
                  {item.type && (
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                      {item.type}
                    </p>
                  )}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  {item.date && (
                    <p className="text-sm text-gray-600 mb-4">{item.date}</p>
                  )}
                </div>
                {/* Image or content area */}
                <div className="w-full h-48 sm:h-40 lg:h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-b-lg group-hover:scale-105 transition-transform duration-200 ease-out"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/250x150/cccccc/000000?text=Image+Error";
                      e.currentTarget.alt = "Image not found";
                    }}
                  />
                </div>
              </a>
            ))}
          </div>

          {/* See More Button */}
          <div className="text-center">
            <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 font-semibold py-3 px-8 rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              See More
            </button>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export default NewsBlogSection;
