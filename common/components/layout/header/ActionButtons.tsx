import ThemeButton from "../../elements/ThemeButton";
import LoginButton from "../../elements/LoginButton";
import { useSession } from "next-auth/react";
import LogoutButton from "../../elements/LogoutButton";

const ActionButtons = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-center gap-4">
      <ThemeButton />
      {session ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default ActionButtons;
