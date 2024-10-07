"use client";

import React from "react";
import ActivityCard from "./PromotionCard";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { PromotionProps } from "@/common/types/promotion";
import PromotionSkeletonCard from "./PromotionSkeletonCard";
import PromotionCard from "./PromotionCard";

const PromotionList = () => {
  const { data, isLoading } = useSWR("/api/promotion", fetcher);

  const filteredPromotions: PromotionProps[] = data
    ?.filter((item: PromotionProps) => item?.isShow)
    .sort((a: PromotionProps, b: PromotionProps) => b.id - a.id);

  return (
    <div className="grid w-full lg:grid-cols-4 lg:gap-4 gap-8">
      {!isLoading
        ? filteredPromotions?.map((blog, index) => (
            <PromotionCard
              key={index}
              {...blog}
              data-aos="fade-up"
              data-aos-delay={index * 100 + 300}
            />
          ))
        : Array.from({ length: 8 }).map((_, index) => (
            <PromotionSkeletonCard key={index} />
          ))}
    </div>
  );
};

export default PromotionList;
