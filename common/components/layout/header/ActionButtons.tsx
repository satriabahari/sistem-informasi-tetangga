import ThemeButton from "../../elements/ThemeButton";
import LoginButton from "../../elements/LoginButton";
import { useSession } from "next-auth/react";
import LogoutButton from "../../elements/LogoutButton";
import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { Label } from "@/common/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/common/components/ui/sheet";
import MenuItemList from "./MenuItemList";
import { IoMenu as MenuIcon } from "react-icons/io5";

const ActionButtons = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-center gap-4">
      <ThemeButton />
      {session ? <LogoutButton /> : <LoginButton />}
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="block border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 px-3 text-neutral-700 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-300 lg:hidden">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[200px] space-y-8">
            <MenuItemList />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ActionButtons;
