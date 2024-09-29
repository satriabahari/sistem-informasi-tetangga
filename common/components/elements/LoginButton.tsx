import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const LoginButton = () => {
  return (
    <Button className="border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 py-1 font-semibold text-neutral-50 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900">
      <Link href="/login" className="text-amber-500">
        Login
      </Link>
    </Button>
  );
};

export default LoginButton;
