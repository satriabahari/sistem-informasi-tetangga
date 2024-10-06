"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/components/ui/table";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { NeighborhoodFundProps } from "@/common/types/neighborhood-fund";
import FormHeading from "@/common/components/elements/FormHeading";

const NeighbohoodFundTable = () => {
  const { data } = useSWR("/api/neighborhood-fund", fetcher);
  return (
    <div className="flex w-full flex-col items-center space-y-4">
      <FormHeading title="Tabel Kas RT" />
      <div className="rounded-xl bg-neutral-200 p-4 dark:bg-neutral-800 w-full">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow className="border-neutral-700 hover:bg-neutral-300 dark:border-neutral-300 dark:hover:bg-neutral-700">
              <TableHead>No.</TableHead>
              <TableHead>Nama Penerima</TableHead>
              <TableHead>Alamat</TableHead>
              <TableHead>Jenis Bantuan</TableHead>
              <TableHead>Jumlah Bantuan</TableHead>
              <TableHead>Tanggal Distribusi</TableHead>
              <TableHead>Catatan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: NeighborhoodFundProps, index: number) => (
              <TableRow
                key={index}
                className="border-neutral-700 hover:bg-neutral-300 dark:border-neutral-300 dark:hover:bg-neutral-700"
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.recipient_name}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.aid_type}</TableCell>
                <TableCell>{item.aid_amount}</TableCell>
                <TableCell>
                  {new Date(item.distribution_date).toLocaleDateString()}
                </TableCell>
                <TableCell>{item.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
        <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
        </TableFooter> */}
        </Table>
      </div>
    </div>
  );
};

export default NeighbohoodFundTable;
