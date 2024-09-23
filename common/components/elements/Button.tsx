import cn from "@/common/libs/clsxm";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className = "", ...others }: ButtonProps) => {
  return (
    // <div className="w-fit rounded-lg bg-gradient-to-br p-0.5 transition duration-300 hover:scale-105 active:scale-90 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500">
    <button
      className={cn(
        "rounded-lg border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 px-4 py-1 font-medium text-neutral-50 transition duration-300 hover:scale-110 active:scale-100 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900",
        className,
      )}
      {...others}
    >
      <div className="text-gradient-color flex items-center justify-center gap-2">
        {children}
      </div>
    </button>

    // </div>
  );
};

export default Button;
