"use client";

import { OrganizationProps } from "@/common/types/organization";
import { fetcher } from "@/services/fetcher";
import React from "react";
import useSWR from "swr";
import OrganizationCard from "./OrganizationCard";

const OrganizationList = () => {
  const { data } = useSWR("/api/organization", fetcher);

  return (
    <div
      className="grid grid-cols-1 gap-8 lg:grid-cols-2"
      data-aos="fade-down"
      data-aos-delay="200"
      data-aoa-anchor="#organization"
    >
      {data
        ?.sort((a: OrganizationProps, b: OrganizationProps) => a.id - b.id)
        .map((item: OrganizationProps, index: number) => (
          <OrganizationCard key={index} {...item} />
        ))}
    </div>
  );
};

export default OrganizationList;
