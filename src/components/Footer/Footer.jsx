"use client";

import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MessageSquare,
} from "lucide-react";
import MaxWidthContainer from "../MaxWidthContainer";

function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 relative">
      <MaxWidthContainer>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Media Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Logo */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <img
                src="https://placehold.co/150x40/000000/ffffff?text=ParkMobile"
                alt="ParkMobile Logo"
                className="h-10 rounded-md"
                // Optional: Add onerror to handle broken image links
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/150x40/cccccc/000000?text=Logo";
                  e.currentTarget.alt = "Fallback Logo";
                }}
              />
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  About ParkMobile
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Newsroom
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  ParkMobile Cares
                </a>
              </li>
              <li>
                <a
                  href="/parking-locations"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Parking near you
                </a>
              </li>
            </ul>
          </div>

          {/* Locations Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <div className="grid grid-cols-2 gap-y-2">
              <a
                href="/parking-locations"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Atlanta
              </a>
              <a
                href="/parking-locations"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Milwaukee
              </a>
              <a
                href="/parking-locations"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Boston
              </a>
              <a
                href="/parking-locations"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Denver
              </a>
              <a
                href="/parking-locations"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Washington DC
              </a>
              <a
                href="/parking-locations"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Baltimore
              </a>
              <a
                href="/parking-locations"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Nashville
              </a>
              <a
                href="/parking-locations"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Kansas City
              </a>
              <a
                href="/parking-locations"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                San Francisco
              </a>
              <a
                href="/parking-locations"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Oakland
              </a>
              <a
                href="/parking-locations"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Chicago
              </a>
              <a
                href="/parking-locations"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                More...
              </a>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-semibold"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-semibold"
                >
                  Log in / Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container mx-auto px-4 mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
          <p>&copy;2024 ParkMobile, LLC. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Accessibility
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Do not sell my personal information
            </a>
          </div>
        </div>

        {/* Chat Bubble Icon */}
        <button
          className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200 z-50"
          aria-label="Open chat"
        >
          <MessageSquare className="h-8 w-8" />
        </button>
      </MaxWidthContainer>
    </footer>
  );
}

export default Footer;
