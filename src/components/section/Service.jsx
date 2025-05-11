import React from "react";
import SectionHeader from "../SectionHeader";
import { serviceData } from "@/data";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

function Service() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <SectionHeader
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-12">
        {serviceData.map((item, index) => (
          <div
            key={index}
            className={`px-6 py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 border-2 rounded-3xl drop-shadow-[0_5px_0_rgba(0,0,0,1)] flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 ${item.bgStyle} transition-all hover:translate-y-[-5px] group duration-300 ease-in-out`}
          >
            {/* Text Content */}
            <div className="flex flex-col justify-between h-full ">
              <div>
                <h2
                  className={`text-xl md:text-2xl lg:text-h3 font-bold group-hover:rotate-3 w-fit duration-300 ease-linear ${item.titleStyle}`}
                >
                  {item.title}
                </h2>
                {item.title2 && (
                  <h2
                    className={`text-xl md:text-2xl lg:text-h3 font-bold group-hover:-rotate-3 w-fit duration-300 ease-linear ${item.titleStyle}`}
                  >
                    {item.title2}
                  </h2>
                )}
              </div>

              <div className="flex items-center gap-2 mt-4 md:mt-6">
                <ArrowUpRight
                  size={24}
                  className={`rounded-full p-1 ${item.titleStyle} w-6 h-6`}
                />
                <p className="text-sm md:text-base ">Learn More</p>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="w-full h-auto max-h-[120px] md:max-h-[150px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
