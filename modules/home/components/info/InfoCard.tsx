import { Card, CardContent, CardHeader } from "@/common/components/ui/card";
import { InfoItemProps } from "@/common/types/info";
import React from "react";

const InfoCard = ({ title, description, icon, value, unit }: InfoItemProps) => {
  return (
    <Card className="flex flex-col items-center justify-center">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="w-fit rounded-md p-2 dark:bg-neutral-700">
          <div>{icon}</div>
        </div>
        <div className="flex gap-2">
          <span>{value}</span>
          <span>{unit}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
