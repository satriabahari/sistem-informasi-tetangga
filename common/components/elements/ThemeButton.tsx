"use client";

import { useTheme } from "next-themes";
import { FaMoon as DarkIcon, FaSun as LightIcon } from "react-icons/fa";
import { Button } from "../ui/button";
import cn from "@/common/libs/clsxm";

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
      className={cn(
        "border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 p-2 text-neutral-700 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-300", className
      )}
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
