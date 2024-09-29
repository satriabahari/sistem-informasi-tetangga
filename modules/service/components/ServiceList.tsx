import CORRESPONDENCE_ITEMS from "@/common/constants/correspondence";
import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  const filteredServices = CORRESPONDENCE_ITEMS.filter((item) => item.is_show);
  return (
    <div className="grid grid-cols-4 gap-4">
      {filteredServices.map((item, index) => (
        <ServiceCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ServiceList;
