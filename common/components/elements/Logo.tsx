import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size, className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/images/logo/logo-singa.png"
        width={size ? size : 35}
        height={size ? size : 35}
        alt="logo"
      />
      <h2 className={cn("text-lg font-semibold text-amber-500", className)}>SINGA</h2>
    </div>
  );
};

export default Logo;
