import ACTIVITY_ITEMS from "@/common/constants/activity";
import React from "react";
import ActivityCard from "./ActivityCard";

const ActivityList = () => {
  const filteredBlogs = ACTIVITY_ITEMS.filter((item) => item.isShow);
  return (
    <div className="grid grid-cols-3 gap-4">
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

export default ActivityList;
