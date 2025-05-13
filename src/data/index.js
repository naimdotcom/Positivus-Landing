const navbar = [
  {
    name: "About us",
    link: "",
  },
  {
    name: "Services",
    link: "",
  },
  {
    name: "Use Cases",
    link: "",
  },
  {
    name: "Pricing",
    link: "",
  },
  {
    name: "Contact",
    link: "",
  },
  {
    name: "Blog",
    link: "",
  },
];

import team1 from "@/assets/Team/team1.png";
import team2 from "@/assets/Team/team2.png";
import team3 from "@/assets/Team/team3.png";
import team4 from "@/assets/Team/team4.png";
import team5 from "@/assets/Team/team5.png";
import team6 from "@/assets/Team/team6.png";
import linkdin from "@/assets/Linkdin.svg";

export const TeamData = [
  {
    name: "John Smith",
    position: "CEO and Founder",
    detail:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: team1,
    icon: linkdin,
    link: "",
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    detail:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    image: team2,
    icon: linkdin,
    link: "",
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    detail:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    image: team3,
    icon: linkdin,
    link: "",
  },
  {
    name: "Emily Johnson",
    position: "PPC Manager",
    detail:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: team4,
    icon: linkdin,
    link: "",
  },
  {
    name: "Brian Williams",
    position: "Social Media Specialist",
    detail:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    image: team5,
    icon: linkdin,
    link: "",
  },
  {
    name: "Sarah Kim",
    position: "Content Creator",
    detail:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    image: team6,
    icon: linkdin,
    link: "",
  },
];

import SEOImage from "@/assets/seo.png";
import emailMarketingImage from "@/assets/email-marketing.png";
import payPerClickImage from "@/assets/pay-per-click.png";
import socialMediaImage from "@/assets/social-media-marketing.png";
import contentCreationImage from "@/assets/content-creation.png";
import analytics from "@/assets/analatics.png";
import CTAImage from "@/assets/CTA.png";

const serviceData = [
  {
    title: "Serch engine ",
    title2: "optimization",
    link: "#",
    image: SEOImage,
    titleStyle: "bg-primary text-secondary rotate-",
    bgStyle: "bg-tertiary",
  },
  {
    title: "Pay-per-click ",
    title2: "advertising",
    link: "#",
    image: payPerClickImage,
    titleStyle: "bg-white text-secondary",
    bgStyle: "bg-primary",
  },
  {
    title: "Social Media ",
    title2: "Marketing",
    link: "#",
    image: socialMediaImage,
    titleStyle: "bg-white text-secondary",
    bgStyle: "bg-secondary",
  },
  {
    title: "Email ",
    title2: "Marketing",
    link: "#",
    image: emailMarketingImage,
    titleStyle: "bg-primary text-secondary",
    bgStyle: "bg-tertiary",
  },
  {
    title: "Content",
    title2: "Creation",
    link: "#",
    image: contentCreationImage,
    titleStyle: "bg-white text-secondary",
    bgStyle: "bg-primary",
  },

  {
    title: "Analytics &",
    title2: "Tracking",
    link: "#",
    image: analytics,
    titleStyle: "bg-primary text-secondary",
    bgStyle: "bg-secondary",
  },
];

import companyLogo from "@/assets/Company logo.png";
import companyLogo1 from "@/assets/Company logo-1.png";
import companyLogo2 from "@/assets/Company logo-2.png";
import companyLogo3 from "@/assets/Company logo-3.png";
import companyLogo4 from "@/assets/Company logo-4.png";
import companyLogo5 from "@/assets/Company logo-5.png";

const comapanyLogos = [
  {
    logo: companyLogo,
  },
  {
    logo: companyLogo1,
  },
  {
    logo: companyLogo2,
  },
  {
    logo: companyLogo3,
  },
  {
    logo: companyLogo4,
  },
  {
    logo: companyLogo5,
  },
];

export {
  companyLogo,
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
  companyLogo5,
  comapanyLogos,
  CTAImage,
};
export { navbar, serviceData };
