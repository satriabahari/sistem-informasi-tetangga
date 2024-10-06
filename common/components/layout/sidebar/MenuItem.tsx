import cn from "@/common/libs/clsxm";
import { MenuItemProps } from "@/common/types/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({ title, href, icon }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-1 rounded-md px-4 py-2 text-sm font-semibold text-neutral-500 transition duration-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-300",
        isActive &&
          "text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300 bg-neutral-300",
      )}
    >
      {icon && <div>{icon}</div>}
      {title}
    </Link>
  );
};

export default MenuItem;
