import { FaUsers, FaHome, FaChartPie, FaCity } from "react-icons/fa";
import { InfoItemProps } from "../types/info";

const iconSize = 20;

const INFO_ITEMS: InfoItemProps[] = [
  {
    title: "Jumlah Penduduk",
    description: "Jumlah total penduduk yang tinggal di RT 001.",
    icon: <FaUsers size={iconSize} />,
    value: 93,
    unit: "orang",
    isShow: true,
  },
  {
    title: "Jumlah Kepala Keluarga",
    description: "Total jumlah kepala keluarga di RT 001.",
    icon: <FaHome size={iconSize} />,
    value: 17,
    unit: "KK",
    isShow: true,
  },
  {
    title: "Luas Wilayah",
    description: "Luas wilayah RT 001 dalam kilometer persegi.",
    icon: <FaChartPie size={iconSize} />,
    value: 2.5,
    unit: "km²",
    isShow: true,
  },
  {
    title: "Jumlah Rumah",
    description: "Jumlah rumah yang ada di RT 001.",
    icon: <FaCity size={iconSize} />,
    value: 62,
    unit: "unit",
    isShow: true,
  },
];

export default INFO_ITEMS;
