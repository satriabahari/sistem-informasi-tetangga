import { cn } from "@/lib/utils";
import React from "react";

interface FormHeadingProps {
  title: string;
  className?: string;
}

const FormHeading = ({ title, className }: FormHeadingProps) => {
  return (
    <>
      <h1
        className={cn(
          "text-2xl font-semibold text-neutral-700 dark:text-neutral-300",
          className,
        )}
      >
        {title}
      </h1>
    </>
  );
};

export default FormHeading;
