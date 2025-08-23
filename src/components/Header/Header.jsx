"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import MaxWidthContainer from "../MaxWidthContainer";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const router = useRouter();

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsLoggedIn(true);
        setUserRole(decoded.role);
      } catch (err) {
        setIsLoggedIn(false);
        setUserRole(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserRole(null);
    router.push("/login");
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <MaxWidthContainer>
        <div className="container mx-auto py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            {/* Using a placeholder for the logo. Replace with your actual image. */}
            <Link href="/">
              <img
                src="https://placehold.co/150x40/000000/ffffff?text=ParkMobile"
                alt="ParkMobile Logo"
                className="h-10 rounded-md"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-base font-medium rounded-md"
            >
              Home
            </a>
            <a
              href="/parking-locations"
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-base font-medium rounded-md"
            >
              Find A Parking Location
            </a>
            <a
              href="/parking-locations"
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-base font-medium rounded-md"
            >
              Get A Parking Pass
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-base font-medium rounded-md"
            >
              About Us
            </a>
          </nav>

          {/* Right Section - Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
              className="p-2 text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="h-6 w-6" />
            </button>

            {/* Mobile Menu Button (Hamburger/Close Icon) */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 border-t border-gray-200 animate-slide-down">
            <nav className="flex flex-col items-center space-y-4">
              <a
                href="#"
                className="block text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg font-medium py-2 w-full text-center rounded-md"
              >
                Ready to park now
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg font-medium py-2 w-full text-center rounded-md"
              >
                Reserve parking for later
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg font-medium py-2 w-full text-center rounded-md"
              >
                ParkMobile for Business
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg font-medium py-2 w-full text-center rounded-md"
              >
                Solutions for parking providers
              </a>
            </nav>
          </div>
        )}

        {/* Tailwind Custom Animation for mobile menu (add to your global CSS or tailwind.config.js) */}
        <style jsx global>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slide-down {
            animation: slideDown 0.3s ease-out forwards;
          }
        `}</style>
      </MaxWidthContainer>
    </header>
  );
}

export default Header;
