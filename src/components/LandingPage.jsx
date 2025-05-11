import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ComapanyLogo from "./section/ComapanyLogo";
import Service from "@/components/section/Service";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ComapanyLogo />
      <Service />
    </div>
  );
}

export default LandingPage;
