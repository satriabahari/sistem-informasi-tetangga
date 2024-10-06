import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/common/components/ui/card";
import { OrganizationProps } from "@/common/types/organization";
import Image from "next/image";
import React from "react";

const OrganizationCard = ({
  name,
  address,
  position,
  email,
  phone_number,
  period,
  image,
}: OrganizationProps) => {
  return (
    <Card className="flex flex-col items-center justify-center text-center group">
      <CardHeader>
        <h5 className="text-lg font-medium dark:text-neutral-50">{position}</h5>
        <p className="text-sm dark:text-neutral-400">{period}</p>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        <Image
          src={"/images/hero.jpg"}
          alt={name}
          width={300}
          height={300}
          className="rounded-xl"
        />
        <p className="text-xl font-medium group-hover:text-amber-500 duration-300">{name}</p>
      </CardContent>
      <CardFooter className="flex flex-col dark:text-neutral-400">
        <p>{email}</p>
        <p>{phone_number}</p>
      </CardFooter>
    </Card>
  );
};

export default OrganizationCard;
