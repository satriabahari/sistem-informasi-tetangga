import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  return (
    <Link
      href="/"
      className="absolute left-4 top-4 rounded-full border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 p-2 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
      data-aos="fade-left"
      data-aos-delay="400"
      data-aos-anchor="#login"
    >
      <FaArrowLeft />
    </Link>
  );
};

export default BackButton;
