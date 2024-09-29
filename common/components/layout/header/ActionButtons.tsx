import ThemeButton from "../../elements/ThemeButton";
import LoginButton from "../../elements/LoginButton";

const ActionButtons = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      <ThemeButton />
      <LoginButton />
    </div>
  );
};

export default ActionButtons;
