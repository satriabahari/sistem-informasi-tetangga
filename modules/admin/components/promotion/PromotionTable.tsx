"use client";

import React, { useState } from "react";
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
import { ActivityProps } from "@/common/types/activity";
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
import { PromotionProps } from "@/common/types/promotion";

interface PromotionTableProps {
  data: PromotionProps[];
  handleDelete: (id: number) => void;
}

const PromotionTable = ({ data, handleDelete }: PromotionTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Building Area</TableHead>
          <TableHead>Block</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>IsShow</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: PromotionProps, index: number) => (
          <TableRow key={index}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.image}</TableCell>
            <TableCell>{item.building_area}</TableCell>
            <TableCell>{item.block}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.isShow ? "Yes" : "No"}</TableCell>    
            <TableCell className="flex gap-2">
              <Button className="bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:text-neutral-50 dark:hover:bg-green-600">
                <Link href={`/admin/promotion/edit/${item.id}`}>Edit</Link>
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-red-500 hover:bg-red-600 dark:bg-red-500 dark:text-neutral-50 dark:hover:bg-red-600">
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the promotion record.
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

export default PromotionTable;
