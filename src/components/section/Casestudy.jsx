import React from "react";
import SectionHeader from "../SectionHeader";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

function Casestudy() {
  return (
    <div className="container mx-auto md:px-0 px-2 py-20 space-y-10">
      <SectionHeader
        title="Case Study"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="bg-secondary w-full text-white lg:px-16 px-8 py-20 rounded-3xl flex lg:flex-row flex-col items-center lg:gap-20 gap-10">
        <div>
          <h2 className="text-p">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </h2>
          <div className="flex items-center text-primary gap-2 text-h4">
            Learn more <ArrowUpRight />
          </div>
        </div>
        <div className="bg-white lg:w-2 lg:h-30 w-[90%] h-1 lg:max-h-[50%]" />
        <div>
          <h2 className="text-p">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </h2>
          <div className="flex items-center text-primary gap-2 text-h4">
            Learn more <ArrowUpRight />
          </div>
        </div>
        <div className="bg-white lg:w-2 lg:h-30 w-[90%] h-1 lg:max-h-[50%]" />
        <div>
          <h2 className="text-p">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </h2>
          <div className="flex items-center text-primary gap-2 text-h4">
            Learn more <ArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Casestudy;
