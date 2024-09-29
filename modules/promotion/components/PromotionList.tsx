"use client";

import ACTIVITY_ITEMS from "@/common/constants/activity";
import React from "react";
import ActivityCard from "./PromotionCard";
import PROMOTION_ITEMS from "@/common/constants/promotion";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { PromotionProps } from "@/common/types/promotion";

const PromotionList = () => {
  const { data, isLoading, error } = useSWR("/api/promotion", fetcher);

  const filteredPromotions: PromotionProps[] = data
    ?.filter((item: PromotionProps) => item?.isShow)
    .sort((a: PromotionProps, b: PromotionProps) => b.id - a.id);

  console.log(filteredPromotions);
  return (
    <div className="grid grid-cols-4 gap-4">
      {filteredPromotions?.map((blog, index) => (
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
