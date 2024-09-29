"use client";

import React from "react";
import Header from "./header/Header";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import HeaderSidebar from "./sidebar/Header";

interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isFullPage = pathname === "/login" || isAdmin;

  return (
    <>
      {isFullPage ? (
        <div className="grid grid-cols-[200px_1fr]">
          <Sidebar />
          <div>
            <HeaderSidebar />
            <main className="p-8">{children}</main>
          </div>
        </div>
      ) : (
        <div className="flex min-h-screen flex-col justify-between">
          <div className="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_70%,transparent_100%)]" />
          <Header />
          <main className="px-16">{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layouts;
