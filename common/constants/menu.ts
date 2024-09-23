import { MenuItemProps } from "../types/menu";

const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Beranda",
    href: "/",
    isShow: true,
  },
  {
    title: "Kegiatan",
    href: "/kegiatan",
    isShow: true,
  },
  {
    title: "Layanan",
    href: "/layanan",
    isShow: false,
  },
  {
    title: "Promosi",
    href: "/promosi",
    isShow: true,
  },
  {
    title: "Statistik",
    href: "/statistik",
    isShow: true,
  },
  {
    title: "Admin",
    href: "/admin",
    isShow: true,
  },
];

export default MENU_ITEMS;
