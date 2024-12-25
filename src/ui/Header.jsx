import { HiBars3 } from "react-icons/hi2";
import UserAvatar from "../features/authentication/userAvatar";

function Header({ handleClick }) {
  return (
    <nav className="fixed top-0 z-40 w-full border-b dark:text-white dark:bg-gray-800 dark:border-gray-700 ">
      <div className="px-3 py-5">
        <div className="flex items-center justify-between">
          <div>
            <HiBars3
              onClick={handleClick}
              className="w-10 h-10 p-2 text-gray-500 rounded-md sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200 focus:ring-2 dark:hover:bg-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            />
          </div>
          <div className="flex items-center">
            <UserAvatar />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
