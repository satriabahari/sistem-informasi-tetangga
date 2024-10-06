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
import PromotionTable from "./OrganizationTable";
import OrganizationTable from "./OrganizationTable";

const Organization = () => {
  const { data } = useSWR("/api/organization", fetcher);
  const router = useRouter();

  const handleDelete = async (id: number) => {
    await axios.delete(`/api/organization/${id}`);
    await mutate("/api/organization");
    router.refresh();
    toast.success("Data deleted successfully");
  };

  return (
    <div className="space-y-4">
      <Button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:text-neutral-50 dark:hover:bg-blue-600">
        <Link href="/admin/organization/create">Create</Link>
      </Button>
      <OrganizationTable data={data} handleDelete={handleDelete} />
    </div>
  );
};

export default Organization;