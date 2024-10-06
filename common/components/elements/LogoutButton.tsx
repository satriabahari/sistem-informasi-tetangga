import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button
      className="border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 py-1 font-semibold  dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
      onClick={() => signOut()}
    >
      <p className="text-amber-500">Logout</p>
    </Button>
  );
};

export default LogoutButton;
