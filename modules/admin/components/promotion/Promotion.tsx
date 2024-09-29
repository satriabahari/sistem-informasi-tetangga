"use client";
import React from "react";

import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { ActivityProps } from "@/common/types/activity";
import { Button } from "@/common/components/ui/button";
import Link from "next/link";
import axios from "axios";
import PromotionTable from "./PromotionTable";

const Promotion = () => {
  const { data } = useSWR("/api/promotion", fetcher);

  const handleDelete = async (id: number) => {
    await axios.delete(`/api/promotion/${id}`);
  };

  return (
    <>
      <PromotionTable data={data} handleDelete={handleDelete} />
    </>
  );
};

export default Promotion;
