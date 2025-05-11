import { navbar } from "@/data";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="container mx-auto my-16">
      <div className="flex items-center justify-between">
        <picture>
          <Image
            src={"/positivus.png"}
            width={250}
            height={60}
            className="min-w-[250px] min-h-[60px] w-full h-full"
            alt="Positivus Logo"
          />
        </picture>
        <div className="flex items-center gap-8">
          <div className="flex gap-10">
            {navbar.map((item) => (
              <p className="cursor-pointer text-p font-space-grotesk">
                {item.name}
              </p>
            ))}
          </div>
          <div>
            <button className="border py-5 px-8 rounded-lg text-p font-space-grotesk hover:bg-primary hover:text-secondary border-secondary duration-300 ease-linear">
              Request a quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
