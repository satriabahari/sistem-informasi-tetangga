import { Card, CardContent, CardHeader } from "@/common/components/ui/card";
import { InfoItemProps } from "@/common/types/info";
import React from "react";

const InfoCard = ({ title, description, icon, value, unit }: InfoItemProps) => {
  return (
    <Card className="group flex flex-col items-center justify-center gap-2 p-6 text-center hover:scale-110">
      <CardHeader className="flex flex-col items-center justify-center gap-1 p-0">
        <div className="w-fit rounded-md p-2 duration-300 dark:bg-neutral-700 dark:group-hover:bg-amber-500">
          <div>{icon}</div>
        </div>
        <div className="flex gap-1 text-lg font-medium duration-300 group-hover:text-amber-500">
          <span>{value}</span>
          <span>{unit}</span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-sm text-neutral-500">{description}</p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
