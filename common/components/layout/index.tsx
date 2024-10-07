"use client";

import React, { useEffect } from "react";
import Header from "./header/Header";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import HeaderSidebar from "./sidebar/Header";
import AOS from "aos";
import "aos/dist/aos.css";

interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isFullPage = pathname === "/login";

  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 50,
      anchorPlacement: "top-center",
      once: true,
    });
  }, []);

  return (
    <>
      {isAdmin ? (
        <div className="grid grid-cols-[200px_1fr]">
          <Sidebar />
          <main className="p-8">{children}</main>
        </div>
      ) : isFullPage ? (
        <div>
          <main>{children}</main>
        </div>
      ) : (
        <div className="flex min-h-screen flex-col justify-between">
          <div className="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_70%,transparent_100%)]" />
          <Header />
          <main className="lg:px-16 px-8 py-36">{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layouts;
