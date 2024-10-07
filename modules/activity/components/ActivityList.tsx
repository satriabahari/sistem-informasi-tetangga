"use client";

import React from "react";
import ActivityCard from "./ActivityCard";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { ActivityProps } from "@/common/types/activity";
import { Skeleton } from "@/common/components/ui/skeleton";
import SkeletonCard from "./ActivitySkeletonCard";

const ActivityList = () => {
  const { data, isLoading } = useSWR("/api/activity", fetcher);

  const filteredActivities: ActivityProps[] = data?.filter(
    (item: ActivityProps) => item?.isShow,
  );

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-8 w-full">
      {!isLoading
        ? filteredActivities?.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))
        : Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
    </div>
  );
};

export default ActivityList;
