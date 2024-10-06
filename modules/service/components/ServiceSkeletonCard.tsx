import { Skeleton } from "@/common/components/ui/skeleton";
import React from "react";

const ServiceSkeletonCard = () => {
  return (
    <div className="h-fit w-full space-y-4 rounded-xl p-6 bg-neutral-200 dark:bg-neutral-800">
      <Skeleton className="h-[150px] w-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
      <Skeleton className="h-6 w-full" />
    </div>
  );
};

export default ServiceSkeletonCard;
