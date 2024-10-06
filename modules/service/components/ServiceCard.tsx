import { Badge } from "@/common/components/ui/badge";
import { Button } from "@/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/common/components/ui/card";
import { CorrespondenceItemProps } from "@/common/types/correspondence";
import { createClient } from "@/common/utils/client";
import { PDFRenderer, PDFViewer } from "@react-pdf/renderer";
import Image from "next/image";
import React, { useState } from "react";

const ServiceCard = ({
  title,
  description,
  letter_no,
  image,
  pdf,
}: CorrespondenceItemProps) => {
  const supabase = createClient();
  const previewURL = !image
    ? "/images/hero.jpg"
    : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/service-image/${image}`;

  const handleDownload = async () => {
    const { data, error } = await supabase.storage
      .from("service-pdf")
      .download(pdf);

    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = url;
      a.download = pdf;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      console.error("Download error:", error);
    }
  };

  return (
    <Card className="flex h-full flex-col justify-between">
      <CardHeader className="w-full">
        <Image
          src={previewURL}
          width={100}
          height={100}
          alt={title}
          className="w-full h-[200px] object-cover rounded-lg"
        />
      </CardHeader>
      <CardContent className="space-y-4">
        <Badge>{letter_no}</Badge>
        <div>
          <h4>{title}</h4>
          <p className="text-sm dark:text-neutral-500">{description}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleDownload}>
          Download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
