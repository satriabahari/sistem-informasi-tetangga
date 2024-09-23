import Image from "next/image";
import React from "react";
import { SiContentstack as LogoIcon } from "react-icons/si";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <Image
        src="/images/logo/logo-singa.png"
        width={35}
        height={35}
        alt="logo"
      />
      <h2 className="text-lg font-medium text-amber-500 dark:text-neutral-300">
        SINGA
      </h2>
    </div>
  );
};

export default Logo;
