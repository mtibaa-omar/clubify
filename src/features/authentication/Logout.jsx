import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import ButtonIcon from "../../ui/ButtonIcon";
import { useMediaQuery } from "@mui/material";

function Logout() {
  const { logout, isLoading } = useLogout();
  const isPhone = useMediaQuery("(max-width: 768px)");

  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      {isLoading ? (
        <SpinnerMini />
      ) : (
        <HiArrowRightOnRectangle size={isPhone ? 20 : 25} />
      )}
    </ButtonIcon>
  );
}

export default Logout;
