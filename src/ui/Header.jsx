import { HiBars3 } from "react-icons/hi2";
import UserAvatar from "../features/authentication/userAvatar";
import { useUser } from "../features/authentication/useUser";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import { HiOutlineUser } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";
import { TbUsersPlus } from "react-icons/tb";

function Header({ handleClick }) {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 z-40 w-full border-b dark:text-white dark:bg-gray-700 dark:border-gray-800 ">
      <div className="px-3 py-5 min-h-[80px]">
        <div className="flex items-center justify-between">
          <div>
            <HiBars3
              onClick={handleClick}
              className="w-10 h-10 p-2 text-gray-500 rounded-md lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200 focus:ring-2 dark:hover:bg-gray-800 dark:text-gray-400 dark:focus:ring-gray-600"
            />
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center justify-center gap-2">
                <UserAvatar />
                <ButtonIcon onClick={() => navigate("settings")}>
                  <HiOutlineUser size={25} />
                </ButtonIcon>
                <ButtonIcon onClick={() => navigate("user")}>
                  <TbUsersPlus size={25} />
                </ButtonIcon>
                <Logout />
              </div>
            ) : (
              <Button $variation="secondary" onClick={() => navigate("login")}>
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
