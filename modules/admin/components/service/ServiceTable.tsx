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
import { ServiceProps } from "@/common/types/service";
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

interface ServiceTableProps {
  data: ServiceProps[];
  handleDelete: (id: number) => void;
}

const ServiceTable = ({ data, handleDelete }: ServiceTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Letter No</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>PDF</TableHead>
          <TableHead>IsShow</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: ServiceProps, index: number) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.letter_no}</TableCell>
            <TableCell>{item.image}</TableCell>
            <TableCell>{item.pdf}</TableCell>
            <TableCell>{item.isShow ? "Yes" : "No"}</TableCell>
            <TableCell className="flex gap-2">
              <Link href={`/admin/service/edit/${item.id}`} passHref>
                <Button className="bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:text-neutral-50 dark:hover:bg-green-600">Edit</Button>
              </Link>
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
                      the service record.
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

export default ServiceTable;
