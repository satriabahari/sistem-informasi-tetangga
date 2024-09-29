import React from "react";
import InfoCard from "./InfoCard";
import INFO_ITEMS from "@/common/constants/info";

const InfoList = () => {
  const filteredInfo = INFO_ITEMS.filter((item) => item.isShow);
  return (
    <div className="flex gap-8">
      {filteredInfo.map((item, index) => (
        <InfoCard key={index} {...item} />
      ))}
    </div>
  );
};

export default InfoList;
