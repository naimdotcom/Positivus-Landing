import React from "react";

function SectionHeader({
  title = "Section Header",
  description = "Section Description",
}) {
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-10">
        <h1 className="text-h2 px-2 py-1 font-space-grotesk rounded-md font-bold leading-tight bg-primary text-secondary">
          {title}
        </h1>
        <p className="text-p font-space-grotesk md:max-w-[40%]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default SectionHeader;
