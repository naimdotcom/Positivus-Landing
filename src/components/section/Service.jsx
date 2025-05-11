import React from "react";
import SectionHeader from "../SectionHeader";
import { serviceData } from "@/data";
function Service() {
  return (
    <div className="container mx-auto py-12">
      <SectionHeader
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div className="grid grid-cols-2">
        {serviceData.map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Service;
