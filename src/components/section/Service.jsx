import React from "react";
import SectionHeader from "../SectionHeader";
import { serviceData } from "@/data";
import Image from "next/image";
function Service() {
  return (
    <div className="container mx-auto py-12">
      <SectionHeader
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div className="grid grid-cols-2 gap-10 items-center mt-10">
        {serviceData.map((item) => (
          <div
            className={`px-10 py-8 border-[1px] rounded-3xl drop-shadow-[0_5px_0_rgba(0,0,0,1)] grid grid-cols-2 h-full ${item.bgStyle}`}
          >
            <div>
              <div className="">
                <h2
                  className={`text-h3  w-fit rounded-md p-1 ${item.titleStyle}`}
                >
                  {item.title}
                </h2>
                <h2
                  className={`text-h3 w-fit rounded-md p-1 ${item.titleStyle}`}
                >
                  {item.title2}
                </h2>
              </div>
              <div>
                <ArrowCircleUpRight size={32} />
              </div>
            </div>

            <div>
              <picture>
                <Image src={item.image} alt={item.title} />
              </picture>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
