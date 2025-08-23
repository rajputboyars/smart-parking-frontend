import HeroSection from "@/components/HeroBanner/HeroBanner";
import InteractiveParkingSteps from "@/components/InteractiveParkingSteps/InteractiveParkingSteps";
import PayForParkingSection from "@/components/PayForParkingSection/PayForParkingSection";
import ParkingProviderSection from "@/components/ParkingProviderSection/ParkingProviderSection";
import ParkingByCitySection from "@/components/ParkingByCitySection/ParkingByCitySection";
import ParkMobileBusinessSection from "@/components/ParkMobileBusinessSection/ParkMobileBusinessSection";
import TestimonialSwiper from "@/components/Carousels/TestimonialSwiper";

export default function Home() {
  const featureSections = [
    {
      title: "ParkMobile for Business",
      description:
        "Learn about the smarter way to manage your business's expenses. As an admin for your ParkMobile for Business account, you can use the self-service portal to manage vehicles and users, review expenses, pull monthly reporting, manage parking permissions, and more.",
      imageUrl: "/images/ParkMobileBusinessSectionImage.jpg",
      buttonText: "ParkMobile for Business",
      buttonLink: "/business",
    },
    {
      title: "Seamless Parking Access",
      description:
        "Enjoy seamless access to thousands of parking locations nationwide. Our intuitive platform lets you book and pay with just a few taps.",
      imageUrl: "/images/parking-solutions-14.jpg",
      buttonText: "Find Parking",
      buttonLink: "/locations",
    },
    // {
    //   title: "Real-Time Analytics",
    //   description:
    //     "Track your parking performance and understand user behavior with real-time data analytics. Empower your decisions with smart insights.",
    //   imageUrl: "/images/ParkMobileBusinessSectionImage.jpg",
    //   buttonText: "View Dashboard",
    //   buttonLink: "/analytics",
    // },
  ];

  return (
    <div className="">
      <HeroSection />
      {/* <InteractiveParkingSteps /> */}
      <PayForParkingSection />
      {featureSections.map((section, index) => (
        <ParkMobileBusinessSection
          key={index}
          title={section.title}
          description={section.description}
          imageUrl={section.imageUrl}
          buttonText={section.buttonText}
          buttonLink={section.buttonLink}
          reverse={index % 2 === 1} // Alternate layout
        />
      ))}
      <ParkingProviderSection />
      <ParkingByCitySection />
      <TestimonialSwiper />
    </div>
  );
}
