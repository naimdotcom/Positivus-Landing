import { navbar } from "@/data";
import {
  FacebookLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="container mx-auto pt-10">
      <div className="bg-secondary rounded-t-3xl pt-20 pb-7 space-y-12 px-10">
        <div className="flex justify-between items-center">
          <picture>
            <Image
              src={"/positivus-dark.png"}
              width={150}
              height={60}
              alt={"Positivus Logo"}
            />
          </picture>

          <div className="flex gap-4">
            {navbar.map((item) => (
              <p
                key={item.name}
                className="cursor-pointer text-white text-h4 font-space-grotesk hover:text-primary transition-colors duration-200 hover:underline"
              >
                {item.name}
              </p>
            ))}
          </div>
          <div className="flex text-white gap-4">
            <FacebookLogo
              size={32}
              weight="bold"
              className="hover:text-primary"
            />
            <XLogo size={32} weight="bold" className="hover:text-primary" />
            <LinkedinLogo
              size={32}
              weight="bold"
              className="hover:text-primary"
            />
          </div>
        </div>

        {/* contact */}
        <div className="flex justify-between items-center mt-10">
          <div className="flex flex-col gap-5">
            <div className="bg-primary rounded-lg w-fit px-1 text-h4 py-[1px]">
              <h2>Contact us:</h2>
            </div>

            <div className="text-white flex flex-col gap-5">
              <h4>Email: 2x3GZ@example.com</h4>
              <h4>Phone: (123) 456-7890</h4>
              <h4>
                Address: 1234 Main St Moonstone City, Stardust State 12345
              </h4>
            </div>
          </div>

          <div
            className="bg-tertiary/15 px-8 py-10 rounded-xl flex gap-10
          "
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-h4 border  border-white rounded-2xl px-5 py-4 text-white"
            />
            <button className="bg-primary text-black text-h4 rounded-2xl px-4 py-2">
              Subscribe to news
            </button>
          </div>
        </div>

        {/* copyright */}
        <hr className="my-10 bg-white h-[2px]" />

        <div className="flex flex-row text-white gap-6">
          <h1>© 2023 Positivus. All rights reserved</h1>
          <h1 className="underline">Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
