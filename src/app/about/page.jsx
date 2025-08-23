import AwardsAccoladesSection from "@/components/AwardsAccoladesSection/AwardsAccoladesSection";
import CoreValuesSection from "@/components/CoreValuesSection/CoreValuesSection";
import MissionPeopleSection from "@/components/MissionPeopleSection/MissionPeopleSection";
import NewsBlogSection from "@/components/NewsBlogSection/NewsBlogSection";
import ParkingStartingPointSection from "@/components/ParkingStartingPointSection/ParkingStartingPointSection";
import WhatIsParkMobileSection from "@/components/WhatIsParkMobileSection/WhatIsParkMobileSection";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <ParkingStartingPointSection />
      <WhatIsParkMobileSection />
      <MissionPeopleSection />
      <CoreValuesSection />
      <AwardsAccoladesSection />
      <WhatIsParkMobileSection />
      <NewsBlogSection />
    </>
  );
};

export default AboutPage;
