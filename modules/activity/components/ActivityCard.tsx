import { Badge } from "@/common/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/common/components/ui/card";
import { ActivityProps } from "@/common/types/activity";
import Image from "next/image";
import React from "react";

const ActivityCard = ({
  name,
  description,
  date,
  time,
  location,
  status,
  image,
  ...others
}: ActivityProps) => {
  const previewURL = !image
    ? "/images/hero.jpg"
    : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/activity/${image}`;

  const formattedDate = new Date(date).toLocaleDateString();
  return (
    <Card className="flex h-full flex-col justify-between">
      <CardHeader>
        <Image
          src={previewURL}
          width={300}
          height={200}
          alt={name}
          className="h-[200px] w-full rounded-xl object-cover"
        />
      </CardHeader>
      <CardContent className="space-y-2">
        <Badge>{status}</Badge>
        <div className="space-y-1">
          <h3 className="font-semibold text-neutral-700 dark:text-neutral-300">
            {name}
          </h3>
          <p className="text-sm text-neutral-500">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-4">
        <div className="text-center text-xs">
          <h5>Tanggal</h5>
          <span className="text-neutral-500">{formattedDate}</span>
        </div>
        <div className="text-center text-xs">
          <h5>Waktu</h5>
          <span className="text-neutral-500">{time}</span>
        </div>
        <div className="text-center text-xs">
          <h5>Lokasi</h5>
          <span className="text-neutral-500">{location}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ActivityCard;
