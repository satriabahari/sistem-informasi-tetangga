import cn from "@/common/libs/clsxm";
import { MenuItemProps } from "@/common/types/menu";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({ title, href }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { data: session } = useSession();

  const isAdminMenu = href.startsWith("/admin");
  const shouldShowMenu = !isAdminMenu || (isAdminMenu && session);

  if (!shouldShowMenu) return null;

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium text-neutral-500 dark:hover:text-neutral-300",
        isActive && "text-neutral-700 dark:text-neutral-300",
      )}
    >
      {title}
    </Link>
  );
};

export default MenuItem;
