"use client";

import React from "react";
import Header from "./header/Header";
import { usePathname } from "next/navigation";

interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  const pathname = usePathname();
  // const isDashboard = pathname.startsWith("/dashboard");
  const isFullPage = ["/login", "/admin"].includes(pathname);
  return (
    <>
      {isFullPage ? (
        <div>
          <main>{children}</main>
        </div>
      ) : (
        <div>
          <div className="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_70%,transparent_100%)]" />
          <Header />
          <main className="px-16">{children}</main>
        </div>
      )}
    </>
  );
};

export default Layouts;
