import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ComapanyLogo from "./section/ComapanyLogo";
import Service from "@/components/section/Service";
import CTA from "./section/CTA";
import Casestudy from "./section/Casestudy";
import WorkProcess from "./section/WorkProcess";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ComapanyLogo />
      <Service />
      <CTA />
      <Casestudy />
      <WorkProcess />
    </div>
  );
}

export default LandingPage;
