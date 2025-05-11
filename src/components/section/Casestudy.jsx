import React from "react";
import SectionHeader from "../SectionHeader";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

function Casestudy() {
  return (
    <div className="container mx-auto py-20 space-y-10">
      <SectionHeader
        title="Case Study"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="bg-secondary w-full text-white px-16 py-20 rounded-3xl flex items-center gap-20">
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
        <div className="bg-white w-2 h-30 max-h-[50%]" />
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
        <div className="bg-white w-2 h-30 max-h-[50%]" />
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
