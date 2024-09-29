import Logo from "../../elements/Logo";
import MenuItemList from "./MenuItemList";

const Sidebar = () => {
  return (
    <header className="min-h-screen px-4 py-4 space-y-12 dark:bg-neutral-700">
      <Logo />
      <MenuItemList />
    </header>
  );
};

export default Sidebar;
