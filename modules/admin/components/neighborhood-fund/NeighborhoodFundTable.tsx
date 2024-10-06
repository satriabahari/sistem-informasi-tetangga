"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/components/ui/table";
import { Button } from "@/common/components/ui/button";
import Link from "next/link";
import { OrganizationProps } from "@/common/types/organization";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/common/components/ui/alert-dialog";
import Image from "next/image";
import { NeighborhoodFundProps } from "@/common/types/neighborhood-fund";

interface NeighborhoodFundTableProps {
  data: NeighborhoodFundProps[];
  handleDelete: (id: number) => void;
}

const NeighborhoodFundTable = ({ data, handleDelete }: NeighborhoodFundTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Recipient Name</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Aid Type</TableHead>
          <TableHead>Aid Amount</TableHead>
          <TableHead>Distribution Date</TableHead>
          <TableHead>Note</TableHead>
          <TableHead>Is Show</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: NeighborhoodFundProps, index: number) => (
          <TableRow key={index}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.recipient_name}</TableCell>
            <TableCell>{item.address}</TableCell>
            <TableCell>{item.aid_type}</TableCell>
            <TableCell>{item.aid_amount}</TableCell>
            <TableCell>{new Date(item.distribution_date).toLocaleDateString()}</TableCell>
            <TableCell>{item.notes}</TableCell>
            <TableCell>{item.isShow ? "Yes" : "No"}</TableCell>
            <TableCell className="flex gap-2">
              <Button className="bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:text-neutral-50 dark:hover:bg-green-600">
                <Link href={`/admin/neighborhood-fund/edit/${item.id}`}>Edit</Link>
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-red-500 hover:bg-red-600 dark:bg-red-500 dark:text-neutral-50 dark:hover:bg-red-600">Delete</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the neighborhood fund record.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(item.id)}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default NeighborhoodFundTable;
