import React from "react";
import InfoCard from "./InfoCard";
import INFO_ITEMS from "@/common/constants/info";

const InfoList = () => {
  const filteredInfo = INFO_ITEMS.filter((item) => item.isShow);
  return (
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {filteredInfo.map((item, index) => (
        <InfoCard
          key={index}
          {...item}
          data-aos="fade-up"
          data-aos-delay={index * 100 + 200}
          data-aoa-anchor="#info"
        />
      ))}
    </div>
  );
};

export default InfoList;
