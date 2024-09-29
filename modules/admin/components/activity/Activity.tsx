"use client";
import React from "react";

import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { ActivityProps } from "@/common/types/activity";
import { Button } from "@/common/components/ui/button";
import Link from "next/link";
import axios from "axios";
import ActivityTable from "./ActivityTable";

const Activity = () => {
  const { data } = useSWR("/api/activity", fetcher);

  const handleDelete = async (id: number) => {
    await axios.delete(`/api/activity/${id}`);
  };

  return (
    <>
      <Button>
        <Link href="/admin/activity/create">Create</Link>
      </Button>
      <ActivityTable data={data} handleDelete={handleDelete} />
    </>
  );
};

export default Activity;
