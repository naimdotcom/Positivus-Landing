import { navbar } from "@/data";
import Image from "next/image";
import MobileMenu from "./MobileMenu"; // We'll create this client component

function Navbar() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      <div className="flex items-center justify-between">
        <picture>
          <Image
            src="/positivus.png"
            width={250}
            height={60}
            className="min-w-[250px] w-full h-full"
            alt="Positivus Logo"
            priority
          />
        </picture>

        {/* Desktop Navigation - stays server-side */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6 lg:gap-7 xl:gap-10">
            {navbar.map((item) => (
              <p
                key={item.name}
                className="cursor-pointer text-p font-space-grotesk hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </p>
            ))}
          </div>
          <div>
            <button className="border py-3 px-6 lg:py-4 lg:px-6 xl:py-5 xl:px-8 rounded-lg text-p font-space-grotesk hover:bg-primary hover:text-secondary border-secondary duration-300 ease-linear hover:border-tertiary">
              Request a quote
            </button>
          </div>
        </div>

        {/* Client-side mobile menu toggle */}
        <MobileMenu navbarItems={navbar} />
      </div>
    </div>
  );
}

export default Navbar;
