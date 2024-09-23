"use client";

import { cn } from "@/lib/utils";

interface SubContainerProps {
  children: React.ReactNode;
  className?: string;
  [propname: string]: React.ReactNode | string | undefined;
}

const SubContainer = ({
  children,
  className = "",
  ...others
}: SubContainerProps) => {
  return (
    <div
      className={cn("flex flex-col items-center justify-center", className)}
      {...others}
    >
      {children}
    </div>
  );
};

export default SubContainer;
