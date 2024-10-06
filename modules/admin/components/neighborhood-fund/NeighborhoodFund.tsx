"use client";
import React from "react";

import useSWR, { mutate } from "swr";
import { fetcher } from "@/services/fetcher";
import { ActivityProps } from "@/common/types/activity";
import { Button } from "@/common/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import NeighborhoodFundTable from "./NeighborhoodFundTable";

const NeighborhoodFund = () => {
  const { data } = useSWR("/api/neighborhood-fund", fetcher);
  const router = useRouter();

  const handleDelete = async (id: number) => {
    await axios.delete(`/api/neighborhood-fund/${id}`);
    await mutate("/api/neighborhood-fund");
    router.refresh();
    toast.success("Data deleted successfully");
  };

  return (
    <div className="space-y-4">
      <Button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:text-neutral-50 dark:hover:bg-blue-600">
        <Link href="/admin/neighborhood-fund/create">Create</Link>
      </Button>
      <NeighborhoodFundTable data={data} handleDelete={handleDelete} />
    </div>
  );
};

export default NeighborhoodFund;
