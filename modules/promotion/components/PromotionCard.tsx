import { Badge } from "@/common/components/ui/badge";
import { Button } from "@/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/common/components/ui/card";
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
  building_area,
  block,
  price,
  ...others
}: PromotionProps) => {
  return (
    <Card className="flex h-full flex-col justify-between">
      <CardHeader>
        <Image
          src={"/images/hero.jpg"}
          width={300}
          height={200}
          alt={title}
          className="w-full rounded-lg"
        />
      </CardHeader>
      <CardContent className="space-y-4">
        <Badge>{category}</Badge>

        <div className="space-y-1">
          <h3 className="font-semibold text-neutral-700 dark:text-neutral-300">
            {title}
          </h3>
          <p className="text-sm text-neutral-500">{description}</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-xs">
          <div className="flex w-full justify-between">
            <h5>Luas Bangunan</h5>
            <p>{building_area}</p>
          </div>
          <div className="flex w-full justify-between">
            <h5>Blok</h5>
            <p>{block}</p>
          </div>
          <div className="flex w-full justify-between">
            <h5>Price</h5>
            <p>{price}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full rounded-full px-4 py-2 dark:bg-neutral-700 dark:text-neutral-300">
          Detail
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PromotionCard;
