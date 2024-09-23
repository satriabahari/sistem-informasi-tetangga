import Link from "next/link";
import ThemeButton from "../../elements/ThemeButton";
import { Button } from "../../ui/button";

const ActionButtons = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="flex items-center gap-4">
        {/* <LocaleSwitcher /> */}
        <ThemeButton />
      </div>
      <Button className="border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 py-1 font-semibold text-neutral-50 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900">
        <Link href="/login" className="text-amber-500">
          Login
        </Link>
      </Button>
    </div>
  );
};

export default ActionButtons;
