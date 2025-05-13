"use client";
import React, { useState } from "react";
import Collapse from "@/components/Collapse"; // assuming your Collapse component is separate

function CollapseGroup({ collapseData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-6">
      {collapseData.map((item, index) => (
        <Collapse
          key={index}
          number={item.number}
          title={item.title}
          description={item.description}
          isExpanded={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default CollapseGroup;
