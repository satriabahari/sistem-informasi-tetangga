"use client";

import cn from "@/common/libs/clsxm";
import { useState } from "react";

interface CategoryItemProps {
  children: React.ReactNode;
  bgColor?: string;
  index: number;
  isActive: boolean;
  handleClick: (index: number) => void;
  [propname: string]: any;
}

const CategoryItem = ({
  children,
  bgColor,
  index,
  isActive,
  handleClick,
  ...others
}: CategoryItemProps) => {
  return (
    <button
      className={cn(
        "rounded-full px-4 py-1 text-xs font-bold text-neutral-700 dark:text-neutral-300",
        isActive ? bgColor : "bg-transparent",
      )}
      onClick={() => handleClick(index)}
      {...others}
    >
      {children}
    </button>
  );
};

export default CategoryItem;
