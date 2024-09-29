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
    <Card className="flex flex-col items-center justify-center text-center">
      <CardHeader className="">
        <h5>{position}</h5>
        <p>{period}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 items-center">
        <Image src={"/images/hero.jpg"} alt={name} width={100} height={100} />
        <p>{name}</p>
        <p>{address}</p>
        <p>{email}</p>
        <p>{phone_number}</p>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default OrganizationCard;
