import React from "react";
import SectionHeader from "../SectionHeader";
import { TeamData } from "@/data";
import Image from "next/image";
function Team() {
  return (
    <div className="container mx-auto py-20 space-y-20">
      <SectionHeader
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />

      <div className="grid grid-cols-3 gap-10 items-center justify-items-center justify-center">
        {TeamData.map((item, index) => (
          <div
            key={item.name + index}
            className="flex flex-col items-center w-full justify-center border rounded-3xl drop-shadow-[0_5px_0_rgba(0,0,0,1)] py-12 px-10 bg-white h-full gap-6 max-w-[85%] "
          >
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-row items-end gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                />
                <div className="flex flex-col ">
                  <h2 className="text-h4 font-medium">{item.name}</h2>
                  <p className="text-p ">{item.position}</p>
                </div>
              </div>
              <picture className="bg-black rounded-full text-primary p-1">
                <Image src={item.icon} alt={item.icon} width={20} height={20} />
              </picture>
            </div>
            <div className="h-[1px] w-full bg-black" />
            <div>
              <p className="text-p">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button className="bg-secondary text-white py-2 px-6 md:py-4 md:px-6 lg:py-5 lg:px-20 rounded-2xl text-base md:text-p font-space-grotesk hover:bg-secondary-dark transition-colors duration-300">
          See all team
        </button>
      </div>
    </div>
  );
}

export default Team;
