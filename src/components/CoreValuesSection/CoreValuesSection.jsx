"use client"; // This component is client-side as it might contain interactive elements in the future.

import React from "react";
import { Lightbulb, Compass, Users } from "lucide-react"; // Using lucide-react for icons
import MaxWidthContainer from "../MaxWidthContainer";

function CoreValuesSection() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <MaxWidthContainer>
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/ParkingImage.jpg')`, // Replace with your actual image URL
            //   backgroundBlendMode: "multiply",
            //   backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for text readability
          }}
        >
          {/* Optional: Additional overlay for more control */}
          {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
        </div>

        <div className="relative z-10 container mx-auto px-4">
          {/* Top Section - Heading and Introduction */}
          <div className=" max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our core values
            </h2>
            <p className="text-lg opacity-90">
              We value innovations that make it easier to live our best lives
            </p>
          </div>

          {/* Core Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Be Curious */}
            <div className="bg-transparent text-white rounded-lg p-6 shadow-lg flex flex-col items-start ">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Lightbulb className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Be Curious</h3>
              <p className="text-lg font-medium text-white mb-4">
                We approach the ever-changing world with curiosity
              </p>
              <ul className="text-sm text-white list-disc list-inside space-y-2 text-left">
                <li>
                  We challenge our assumptions by staying humble and aware that
                  we don’t know it all. We keep learning.
                </li>
                <li>
                  We welcome opportunities that change brings, and we dare to
                  try new things. We are not afraid to fail and try again, and
                  we encourage others to do the same.
                </li>
                <li>
                  We listen and ask questions to understand, with attention and
                  without judgment. We are open to new perspectives from our
                  colleagues, customers and partners.
                </li>
              </ul>
            </div>

            {/* Card 2: Inch by Inch */}
            <div className="bg-transparent text-white rounded-lg p-6 shadow-lg flex flex-col items-start ">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Compass className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inch by Inch</h3>
              <p className="text-lg font-medium text-white mb-4">
                We move towards our vision and celebrate inches along the way
              </p>
              <ul className="text-sm text-white list-disc list-inside space-y-2 text-left">
                <li>
                  We seek to create clarity in all situations to move forward in
                  the same direction.
                </li>
                <li>
                  We focus on impact and invest our energy into what is most
                  important.
                </li>
                <li>
                  We stay constructive and look for solutions for our teams,
                  customers and the community.
                </li>
                <li>
                  We build tomorrow, focusing on the future more than the past.
                  We work on continuous improvements and innovation, taking
                  steps towards our vision.
                </li>
              </ul>
            </div>

            {/* Card 3: Play Well Together */}
            <div className="bg-transparent text-white rounded-lg p-6 shadow-lg flex flex-col items-start ">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Users className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Play Well Together</h3>
              <p className="text-lg font-medium text-white mb-4">
                We play fair for a bigger purpose
              </p>
              <ul className="text-sm text-white list-disc list-inside space-y-2 text-left">
                <li>
                  We care for and support our colleagues, customers, partners
                  and communities. We act with integrity and empathy. We build
                  an inclusive workplace where everyone can be their authentic
                  self.
                </li>
                <li>
                  We act “prestigeless”, we collaborate, stay humble and are
                  approachable. We are ready to roll up our sleeves, contribute
                  and help out. We are in this together.
                </li>
                <li>
                  We are accountable for our individual and team’s actions and
                  results. We welcome creative, challenging and respectful
                  discussions, and we commit to what we agree on.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export default CoreValuesSection;
