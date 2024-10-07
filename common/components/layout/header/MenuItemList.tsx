import React from "react";
import MENU_ITEMS from "@/common/constants/menu";
import MenuItem from "./MenuItem";

const MenuItemList = () => {
  const filteredMenus = MENU_ITEMS.filter((menu) => menu.isShow);
  return (
    <div className="flex flex-col items-start lg:items-center justify-center gap-10 lg:flex-row">
      {filteredMenus.map((menu, index) => (
        <MenuItem key={index} title={menu.title} href={menu.href} />
      ))}
    </div>
  );
};

export default MenuItemList;
