import { MenuItemProps } from "../types/menu";

const SIDEBAR_MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Admin",
    href: "/admin",
    isShow: true,
  },
  {
    title: "Kegiatan",
    href: "/admin/activity",
    isShow: true,
  },
  {
    title: "Layanan",
    href: "/admin/service",
    isShow: true,
  },
  {
    title: "Promosi",
    href: "/admin/promotion",
    isShow: true,
  },
  {
    title: "Organisasi",
    href: "/admin/organization",
    isShow: true,
  },
  {
    title: "Keluar",
    href: "/",
    isShow: true,
  },
];

export default SIDEBAR_MENU_ITEMS;
