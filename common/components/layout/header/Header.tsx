import Logo from "../../elements/Logo";
import ActionButtons from "./ActionButtons";
import MenuItemList from "./MenuItemList";

const Header = () => {
  return (
    <header
      className="fixed z-10 w-full border-b border-neutral-300 bg-white/50 backdrop-blur-xl dark:border-neutral-700 dark:bg-[#121212]/50"
      data-aos="fade-down"
    >
      <div className="flex items-center justify-between px-8 py-3">
        <Logo />
        <MenuItemList />
        <ActionButtons />
      </div>
    </header>
  );
};

export default Header;
