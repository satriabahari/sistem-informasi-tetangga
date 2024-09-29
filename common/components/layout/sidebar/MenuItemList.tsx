import SIDEBAR_MENU_ITEMS from "@/common/constants/sidebar_menu";
import { MenuItemProps } from "@/common/types/menu";
import React from "react";
import MenuItem from "./MenuItem";

const MenuItemList = () => {
  const filteredMenus: MenuItemProps[] = SIDEBAR_MENU_ITEMS.filter(
    (item) => item?.isShow,
  );
  return (
    <div className="flex flex-col gap-10">
      {filteredMenus.map((menu, index) => (
        <MenuItem key={index} title={menu.title} href={menu.href} />
      ))}
    </div>
  );
};

export default MenuItemList;
