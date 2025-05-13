import { CTAImage } from "@/data";
import Image from "next/image";
import React from "react";

function CTA() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      <div className="bg-tertiary py-8 px-6 sm:py-10 sm:px-8 md:px-12 lg:px-16 xl:px-32 rounded-2xl relative w-full max-w-full md:max-w-[95%] mx-auto ">
        {/* Text Content */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full  lg:w-[45%] xl:w-[40%] z-10 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-h3 font-space-grotesk font-bold">
            Let's make things happen
          </h2>
          <p className="text-base sm:text-lg md:text-p font-space-grotesk">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="text-lg sm:text-xl md:text-h4 font-space-grotesk border bg-secondary text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-secondary-dark transition-colors duration-300 w-full sm:w-auto">
            Get your free proposal
          </button>
        </div>

        {/* Image - Responsive Positioning */}
        <div className="hidden lg:block absolute bottom-1/2 translate-y-1/2 right-[10%]">
          <Image
            src={CTAImage}
            alt="Digital marketing illustration"
            width={400}
            height={500}
            className=""
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default CTA;
