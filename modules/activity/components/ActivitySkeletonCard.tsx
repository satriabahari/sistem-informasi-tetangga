import { Skeleton } from "@/common/components/ui/skeleton";
import React from "react";

const ActivitySkeletonCard = () => {
  return (
    <div className="h-fit w-full space-y-4 rounded-xl bg-neutral-200 p-6 dark:bg-neutral-800">
      <Skeleton className="h-[200px] w-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
    </div>
  );
};

export default ActivitySkeletonCard;
