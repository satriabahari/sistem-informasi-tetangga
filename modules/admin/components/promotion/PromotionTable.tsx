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
import { PromotionProps } from "@/common/types/promotion";

interface PromotionTableProps {
  data: PromotionProps[];
  handleDelete: (id: number) => void;
}

const PromotionTable = ({ data, handleDelete }: PromotionTableProps) => {
  return (
    <>
      <Button>
        <Link href="/admin/promotion/create">Create</Link>
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
          {data?.map((item: PromotionProps, index: number) => (
            <TableRow key={index}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.Category}</TableCell>
              <TableCell>{item.image}</TableCell>
              <TableCell>{item.building_area}</TableCell>
              <TableCell>{item.block}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.isShow}</TableCell>
              <TableCell className="flex gap-2">
                <Button>
                  <Link href={`/admin/promotion/edit/${item.id}`}>Edit</Link>
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

export default PromotionTable;
