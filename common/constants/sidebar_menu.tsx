import { FaReact } from "react-icons/fa";
import { MenuItemProps } from "../types/menu";
import { FaPeoplePulling as ActivityIcon } from "react-icons/fa6";
import { FaFileAlt as ServiceIcon } from "react-icons/fa";
import { PiHouseLineFill as PromotionIcon } from "react-icons/pi";
import { VscOrganization as OrganizationIcon } from "react-icons/vsc";
import { MdAssistant as SocialAidIcon } from "react-icons/md";
import { RiFundsBoxFill as NeighborhoodFundIcon } from "react-icons/ri";
import { FiLogOut as OutIcon } from "react-icons/fi";
const iconSize = 16;

const SIDEBAR_MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Kegiatan",
    href: "/admin/activity",
    icon: <ActivityIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Layanan",
    href: "/admin/service",
    icon: <ServiceIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Promosi",
    href: "/admin/promotion",
    icon: <PromotionIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Organisasi",
    href: "/admin/organization",
    icon: <OrganizationIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Bantuan Sosial",
    href: "/admin/social-aid",
    icon: <SocialAidIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Kas RT",
    href: "/admin/neighborhood-fund",
    icon: <NeighborhoodFundIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Keluar",
    href: "/",
    icon: <OutIcon size={iconSize} />,
    isShow: true,
  },
];

export default SIDEBAR_MENU_ITEMS;
