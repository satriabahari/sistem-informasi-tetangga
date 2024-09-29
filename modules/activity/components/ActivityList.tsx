"use client";

import React from "react";
import ActivityCard from "./ActivityCard";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { ActivityProps } from "@/common/types/activity";

const ActivityList = () => {
  const { data } = useSWR("/api/activity", fetcher);

  const filteredActivities: ActivityProps[] = data?.filter(
    (item: ActivityProps) => item?.isShow,
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredActivities?.map((blog, index) => (
        <ActivityCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default ActivityList;
