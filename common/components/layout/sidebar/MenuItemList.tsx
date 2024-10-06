import { MenuItemProps } from "@/common/types/menu";
import React from "react";
import MenuItem from "./MenuItem";
import SIDEBAR_MENU_ITEMS from "@/common/constants/sidebar_menu";

const MenuItemList = () => {
  const filteredMenus: MenuItemProps[] = SIDEBAR_MENU_ITEMS.filter(
    (item) => item?.isShow,
  );
  return (
    <div className="flex flex-col gap-2">
      {filteredMenus.map((menu, index) => (
        <MenuItem key={index} {...menu} />
      ))}
    </div>
  );
};

export default MenuItemList;
