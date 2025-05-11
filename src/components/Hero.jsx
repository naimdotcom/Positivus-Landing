import Image from "next/image";
import heroImage from "@/assets/hero.png";

function Hero() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        {/* Text Content - order changes on mobile */}
        <div className="order-2 lg:order-1 flex flex-col gap-6 md:gap-8 max-w-full lg:max-w-[500px] text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-h1 font-bold leading-tight">
            Navigating the digital landscape for success
          </h1>
          <p className="text-lg sm:text-xl md:text-h4 text-gray-600">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-secondary text-white py-3 px-6 md:py-4 md:px-6 lg:py-5 lg:px-8 rounded-2xl text-base md:text-p font-space-grotesk hover:bg-secondary-dark transition-colors duration-300">
              Book a consultation
            </button>
          </div>
        </div>

        {/* Image - order changes on mobile */}
        <div className="order-1 lg:order-2">
          <Image
            src={heroImage}
            alt="Digital marketing illustration"
            width={700}
            height={700}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
