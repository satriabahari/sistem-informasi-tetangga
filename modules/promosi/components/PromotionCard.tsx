import { ActivityProps } from "@/common/types/activity";
import { PromotionProps } from "@/common/types/promotion";
import Image from "next/image";
import { Stringifier } from "postcss";
import React from "react";

const PromotionCard = ({
  title,
  description,
  image,
  category,
  imageProfile,
  name,
  date,
  ...others
}: PromotionProps) => {
  return (
    <div
      className="card-hover h-full overflow-hidden rounded-2xl border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
      {...others}
    >
      <Image
        src={"/images/hero.jpg"}
        width={300}
        height={200}
        alt={title}
        className="w-full"
      />
      <div className="p-4">
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="mb-2 w-fit rounded-full bg-neutral-300 px-4 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
              {category}
            </div>
            <h3 className="font-semibold text-neutral-700 dark:text-neutral-300">
              {title}
            </h3>
            <p className="text-sm text-neutral-500">{description}</p>
          </div>
          <div className="flex items-center flex-col gap-2 text-xs">
            <div className="flex w-full justify-between">
              <h5>Luas Bangunan</h5>
              <p>36 x 36</p>
            </div>
            <div className="flex w-full justify-between">
              <h5>Blok</h5>
              <p>Blok 1</p>
            </div>
            <div className="flex w-full justify-between">
              <h5>Price</h5>
              <p>Rp. 100.000</p>
            </div>
            <button className="dark:bg-neutral-700 dark:text-neutral-300 w-full py-2 px-4 rounded-full">
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
