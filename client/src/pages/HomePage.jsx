import React from 'react'

import Hero2Section from "../hero2section";
import AIProtectionSection from "../aiProtectionSection";
import VerifiedJobsSection from "../VerifiedJobsSection";
import PortfolioHero from "../PortfolioHero";
import TruOfferFooter from "../Footer";



const App2 = () => {
  return (
    <div>
      
    <Hero2Section/>

      {/*  AI Protection Feature Cards */}
      <AIProtectionSection />

    <VerifiedJobsSection/>

        <PortfolioHero/>
    
    <TruOfferFooter/>

    </div>
  )
}

export default App2
