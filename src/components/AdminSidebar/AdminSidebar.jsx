import { useState, useEffect } from "react";

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${
        isCollapsed ? "w-16 px-3" : "px-6 w-64"
      } bg-gray-900 text-white py-13 flex flex-col rounded-tr-3xl rounded-br-3xl shadow-xl transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-start mb-12">
        <div
          className="bg-white p-2 rounded-lg mt-1.5 mr-3 cursor-pointer"
          onClick={handleToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-900"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {!isCollapsed && (
          <span className="flex flex-col">
            <div className="text-3xl font-semibold">PMS</div>
            <span className="text-[10px]">(Parking Management System)</span>
          </span>
        )}
      </div>
      <nav
        className={`flex-1 transition-all duration-300 ${
          isCollapsed ? "opacity-0" : "opacity-100"
        }`}
      >
        <ul>
          <li className="mb-2">
            <a
              href="#"
              className="flex  flex-nowrap items-center p-3 rounded-lg bg-gray-800 text-purple-400 font-semibold shadow-inner"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Live Overview
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex flex-nowrap items-center p-3 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.627 6.627a.25.25 0 01-.01.353l-2.455 2.5a.25.25 0 00-.01.353l2.455 2.5a.25.25 0 01.01.353l-.53.53a.25.25 0 01-.354-.01L2.126 10a.25.25 0 010-.354l3.947-4.04a.25.25 0 01.354-.01l.53.53zM10 16.5a.5.5 0 00.5-.5V10h-1v6a.5.5 0 00.5.5zM13.373 6.627a.25.25 0 00.01.353l2.455 2.5a.25.25 0 01.01.353l-2.455 2.5a.25.25 0 00-.01.353l.53.53a.25.25 0 00.354-.01L17.874 10a.25.25 0 000-.354l-3.947-4.04a.25.25 0 00-.354-.01l-.53.53z"
                  clipRule="evenodd"
                />
              </svg>
              Previous Analysis
            </a>
          </li>
        </ul>
      </nav>
      {/* Profile Sidebar (bottom left) */}
      <div
        className={`fixed bottom-4 left-2 ${
          isCollapsed ? "opacity-100" : "opacity-0"
        } p-1 bg-gray-900 rounded-2xl shadow-lg z-50`}
      >
        <div className="flex items-center text-white">
          <img
            src="https://placehold.co/40x40/5c6ac4/ffffff?text=U"
            alt="Profile"
            className="rounded-full"
          />
        </div>
      </div>
      <div
        className={`fixed bottom-4 left-4 ${
          isCollapsed ? "opacity-0" : "opacity-100"
        } p-4 bg-gray-900 transition-all duration-300 rounded-2xl shadow-lg z-50`}
      >
        <div className="flex items-center text-white">
          <img
            src="https://placehold.co/40x40/5c6ac4/ffffff?text=U"
            alt="Profile"
            className="rounded-full"
          />
          <div className="ml-3">
            <div className="text-sm font-semibold">Welcome back,</div>
            <div className="text-lg">Suvigya</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-4 transform rotate-180 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
