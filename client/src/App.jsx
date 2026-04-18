
import AIProtectionSection from "./aiProtectionSection";
import VerifiedJobsSection from "./VerifiedJobsSection";
import PortfolioHero from "./PortfolioHero";
import TruOfferFooter from "./Footer";

import Hero2Section from "./hero2section";



export default function App() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background:"#763764", minHeight: "100vh", position: "relative" }}>
      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />

      {/*Navbar + Hero */}
      {/* <HeroSection /> */}

    <Hero2Section/>

      {/*  AI Protection Feature Cards */}
      <AIProtectionSection />

    <VerifiedJobsSection/>

    <PortfolioHero/>
    
    <TruOfferFooter/>


    </div>
  );
}