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
