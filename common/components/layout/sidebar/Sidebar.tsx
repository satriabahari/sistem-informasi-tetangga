import Logo from "../../elements/Logo";
import ThemeButton from "../../elements/ThemeButton";
import MenuItemList from "./MenuItemList";

const Sidebar = () => {
  return (
    <header className="min-h-screen space-y-6 px-4 py-4 dark:bg-neutral-800">
      <div className="space-y-4">
        <Logo size={60} className="text-xl flex-col gap-1" />
        <ThemeButton className="w-full rounded-lg" />
      </div>
      <MenuItemList />
    </header>
  );
};

export default Sidebar;
