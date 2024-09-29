"use client";

import { OrganizationProps } from "@/common/types/organization";
import { fetcher } from "@/services/fetcher";
import React from "react";
import useSWR from "swr";
import OrganizationCard from "./OrganizationCard";

const OrganizationList = () => {
  const { data } = useSWR("/api/organization", fetcher);
  return (
    <div className="grid grid-cols-2 gap-8">
      {data?.map((item: OrganizationProps, index: number) => (
        <OrganizationCard key={index} {...item} />
      ))}
    </div>
  );
};

export default OrganizationList;
