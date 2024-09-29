import { Badge } from "@/common/components/ui/badge";
import { Button } from "@/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/common/components/ui/card";
import { CorrespondenceItemProps } from "@/common/types/correspondence";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({
  title,
  description,
  letter_no,
  image,
  url,
}: CorrespondenceItemProps) => {
  return (
    <Card className="flex h-full flex-col items-center justify-between">
      <CardHeader className="w-full">
        <Image
          src={image}
          width={100}
          height={100}
          alt={title}
          className="w-full rounded-lg"
        />
      </CardHeader>
      <CardContent className="space-y-4">
        <Badge>{letter_no}</Badge>
        <div>
          <h4>{title}</h4>
          <p className="text-sm dark:text-neutral-500">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <Button className="w-full">
          <Link href={url}>Download</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
