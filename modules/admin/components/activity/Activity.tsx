"use client";
import React from "react";

import useSWR, { mutate } from "swr";
import { fetcher } from "@/services/fetcher";
import { ActivityProps } from "@/common/types/activity";
import { Button } from "@/common/components/ui/button";
import Link from "next/link";
import axios from "axios";
import ActivityTable from "./ActivityTable";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Activity = () => {
  const { data } = useSWR("/api/activity", fetcher);
  const router = useRouter();

  const handleDelete = async (id: number) => {
    await axios.delete(`/api/activity/${id}`);
    await mutate("/api/activity");
    router.refresh();
    toast.success("Data deleted successfully");
  };

  return (
    <div className="space-y-4">
      <Link href="/admin/activity/create">
        <Button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:text-neutral-50 dark:hover:bg-blue-600">
          Create
        </Button>
      </Link>
      <ActivityTable data={data} handleDelete={handleDelete} />
    </div>
  );
};

export default Activity;
