import { ActivityProps } from "@/common/types/activity";
import Image from "next/image";
import { Stringifier } from "postcss";
import React from "react";

// id: number;
//   name: string;
//   description: string;
//   date: string;
//   time?: string;
//   location: string;
//   status: string;
//   image: string;
//   isShow?: boolean;

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
  return (
    <div
      className="card-hover h-full overflow-hidden rounded-2xl border-2 p-4 space-y-4 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
      {...others}
    >
      <Image
        src={"/images/hero.jpg"}
        width={300}
        height={200}
        alt={name}
        className="w-full rounded-xl"
      />
      <div>
        <div className="w-fit rounded-md bg-green-100 px-4 py-1 text-xs text-green-700">
          {status}
        </div>

        <div className="space-y-1">
          {/* <div className="mb-2 w-fit rounded-full bg-neutral-300 px-4 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
              {category}
              </div> */}
          <h3 className="font-semibold text-neutral-700 dark:text-neutral-300">
            {name}
          </h3>
          <p className="text-sm text-neutral-500">{description}</p>
        </div>
      </div>

      <hr />

      <div className="flex items-center justify-between gap-4">
        <div className="text-center text-xs">
          <h5>Date</h5>
          <span className="text-neutral-500">{date}</span>
        </div>
        <div className="text-center text-xs">
          <h5>Time</h5>
          <span className="text-neutral-500">{time}</span>
        </div>
        <div className="text-center text-xs">
          <h5>Location</h5>
          <span className="text-neutral-500">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
