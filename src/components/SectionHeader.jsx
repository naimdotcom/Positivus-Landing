import React from "react";

function SectionHeader({
  title = "Section Header",
  description = "Section Description",
}) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl px-2 py-1 font-space-grotesk rounded-md font-bold leading-tight bg-primary text-secondary w-fit">
          {title}
        </h1>
        <p className="text-base sm:text-lg font-space-grotesk md:max-w-[50%] lg:max-w-[40%]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default SectionHeader;
