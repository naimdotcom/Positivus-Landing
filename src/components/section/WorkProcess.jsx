import React from "react";
import SectionHeader from "../SectionHeader";
import CollapseGroup from "../CollapseGroup";
const collapseData = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description:
      "After the consultation, we conduct thorough market research to identify opportunities and challenges. We then develop a customized strategy that aligns with your business objectives and target audience.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Once the strategy is finalized, we move on to the implementation phase. This involves executing the marketing plan, which may include content creation, campaign setup, and other tactical activities.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description:
      "We continuously monitor the performance of your campaigns using advanced analytics tools. This allows us to make data-driven decisions and optimize your marketing efforts for better results.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description:
      "We provide regular reports that detail the performance of your campaigns. These reports include key metrics and insights, and we maintain open communication to ensure you are always informed.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description:
      "Marketing is an ongoing process, and we are committed to continual improvement. We regularly review and refine our strategies to ensure they remain effective and aligned with your evolving business needs.",
  },
];
function WorkProcess() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      <SectionHeader
        title="Our Work Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />

      <div className="py-10">
        <CollapseGroup collapseData={collapseData} />
      </div>
    </div>
  );
}

export default WorkProcess;
