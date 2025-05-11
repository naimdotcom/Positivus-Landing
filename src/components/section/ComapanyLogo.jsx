import { comapanyLogos } from "@/data";
import Image from "next/image";
import React from "react";

function CompanyLogo() {
  return (
    <div className="overflow-hidden py-10 md:py-12 lg:py-16">
      <div className="flex animate-scroll whitespace-nowrap gap-4">
        {[...comapanyLogos, ...comapanyLogos, ...comapanyLogos].map(
          (item, index) => (
            <div key={index} className="mx-10 flex-shrink-0">
              <Image
                src={item.logo}
                alt={item.alt}
                width={100}
                height={100}
                className="min-w-[50px] md:min-w-[100px] grayscale"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default CompanyLogo;
