import ACTIVITY_ITEMS from "@/common/constants/activity";
import React from "react";
import ActivityCard from "./PromotionCard";
import PROMOTION_ITEMS from "@/common/constants/promotion";

const PromotionList = () => {
  const filteredBlogs = PROMOTION_ITEMS.filter((item) => item.isShow);
  return (
    <div className="grid grid-cols-4 gap-4">
      {filteredBlogs.map((blog, index) => (
        <ActivityCard
          key={index}
          {...blog}
          data-aos="fade-up"
          data-aos-delay={index * 100 + 300}
        />
      ))}
    </div>
  );
};

export default PromotionList;
