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
import SocialAidTable from "./SocialAidTable";

const SocialAid = () => {
  const { data } = useSWR("/api/social-aid", fetcher);
  const router = useRouter();

  const handleDelete = async (id: number) => {
    await axios.delete(`/api/social-aid/${id}`);
    await mutate("/api/social-aid");
    router.refresh();
    toast.success("Data deleted successfully");
  };

  return (
    <div className="space-y-4">
      <Button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:text-neutral-50 dark:hover:bg-blue-600">
        <Link href="/admin/social-aid/create">Create</Link>
      </Button>
      <SocialAidTable data={data} handleDelete={handleDelete} />
    </div>
  );
};

export default SocialAid;
