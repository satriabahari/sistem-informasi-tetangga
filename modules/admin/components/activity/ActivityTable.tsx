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
import { ActivityProps } from "@/common/types/activity";

interface ActivityTableProps {
  data: ActivityProps[];
  handleDelete: (id: number) => void;
}

const ActivityTable = ({ data, handleDelete }: ActivityTableProps) => {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>IsShow</TableHead>
          <TableHead>Actios</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: ActivityProps, index: number) => (
          <TableRow key={index}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.image}</TableCell>
            <TableCell>{item.location}</TableCell>
            <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
            <TableCell>{item.time}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.isShow}</TableCell>
            <TableCell className="flex gap-2">
              <Button>
                <Link href={`/admin/activity/edit/${item.id}`}>Edit</Link>
              </Button>
              <Button onClick={() => handleDelete(item.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ActivityTable;
