import React from "react";
import HeroSection from '../components/HeroSection'
import ImproveSkills from '../components/ImproveSkills'
import QuoteSection from '../components/QuoteSection'
import ChiefsSection from '../components/ChiefsSection'


function Home() {
  return (
    <div className="text-center">

      <HeroSection />
      <ImproveSkills />
      <QuoteSection />
      <ChiefsSection />
    </div>
  );
}

export default Home;
