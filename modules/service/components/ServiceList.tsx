"use client";

import React from "react";
import ServiceCard from "./ServiceCard";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { CorrespondenceItemProps } from "@/common/types/correspondence";
import ServiceSkeletonCard from "./ServiceSkeletonCard";

const ServiceList = () => {
  const { data, isLoading } = useSWR("/api/service", fetcher);

  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      {!isLoading
        ? data?.map((item: CorrespondenceItemProps, index: number) => (
            <ServiceCard key={index} {...item} />
          ))
        : Array.from({ length: 8 }).map((_, index) => (
            <ServiceSkeletonCard key={index} />
          ))}
    </div>
  );
};

export default ServiceList;
