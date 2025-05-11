import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ComapanyLogo from "./section/ComapanyLogo";
import Service from "@/components/section/Service";
import CTA from "./section/CTA";
import Casestudy from "./section/Casestudy";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ComapanyLogo />
      <Service />
      <CTA />
      <Casestudy />
    </div>
  );
}

export default LandingPage;
