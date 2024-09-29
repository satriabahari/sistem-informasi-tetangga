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
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { Button } from "@/common/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { OrganizationProps } from "@/common/types/organization";

const OrganizationPage = () => {
  const { data } = useSWR("/api/organization", fetcher);

  console.log(data)

  const handleDelete = async (id: number) => {
    await axios.delete(`/api/organization/${id}`);
  };

  return (
    <>
      <Button>
        <Link href="/admin/organization/create">Create</Link>
      </Button>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
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
          {data?.map((item: OrganizationProps, index: number) => (
            <TableRow key={index}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>{item.position}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone_number}</TableCell>
              <TableCell>{item.period}</TableCell>
              <TableCell>{item.image}</TableCell>
              <TableCell>{item.isShow}</TableCell>
              <TableCell className="flex gap-2">
                <Button>
                  <Link href={`/admin/organization/edit/${item.id}`}>Edit</Link>
                </Button>
                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default OrganizationPage;
