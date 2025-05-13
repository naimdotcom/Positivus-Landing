import React from "react";
import SectionHeader from "../SectionHeader";
import linkdin from "@/assets/Linkdin.svg";

const TeamData = [
  {
    name: "John Smith",
    position: "CEO and Founder",
    detail:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: "",
    icon: linkdin,
    link: "",
  },
];

function Team() {
  return (
    <div className="container mx-auto py-20">
      <SectionHeader
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />

      <div></div>
    </div>
  );
}

export default Team;
