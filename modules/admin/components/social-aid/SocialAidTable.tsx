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
import { SocialAidProps } from "@/common/types/social-aid";

interface SocialAidTableProps {
  data: SocialAidProps[];
  handleDelete: (id: number) => void;
}

const SocialAidTable = ({ data, handleDelete }: SocialAidTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Aid Type</TableHead>
          <TableHead>Aid Amount</TableHead>
          <TableHead>Distribution Date</TableHead>
          <TableHead>Note</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: SocialAidProps, index: number) => (
          <TableRow key={item.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.transaction_type}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>
              {new Date(item.transaction_date).toLocaleDateString()}
            </TableCell>
            <TableCell>{item.notes || "N/A"}</TableCell>
            <TableCell className="flex gap-2">
              <Button className="bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:text-neutral-50 dark:hover:bg-green-600">
                <Link href={`/admin/social-aid/edit/${item.id}`}>Edit</Link>
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
                      the social aid record.
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

export default SocialAidTable;
