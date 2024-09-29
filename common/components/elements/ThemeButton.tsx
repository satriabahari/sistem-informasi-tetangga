"use client";

import { useTheme } from "next-themes";
import { FaMoon as DarkIcon, FaSun as LightIcon } from "react-icons/fa";
import { Button } from "../ui/button";

interface ThemeButtonProps {
  className?: string;
  [propname: string]: React.ReactNode | string | undefined;
}

const ThemeButton = ({ className, ...others }: ThemeButtonProps) => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <Button
      className="border-2 bg-gradient-to-b from-neutral-200 to-neutral-100 text-neutral-700 border-neutral-300 p-2 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-300"
      onClick={toggleTheme}
      {...others}
    >
      {resolvedTheme === "light" ? (
        <LightIcon size={16} />
      ) : (
        <DarkIcon size={16} />
      )}
    </Button>
  );
};

export default ThemeButton;
