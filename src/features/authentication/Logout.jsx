import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button
      onClick={logout}
      disabled={isLoading}
      className={`flex items-center justify-center w-10 h-10 rounded-full transition duration-200  text-blue-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600`}
      title="Logout"
    >
      {isLoading ? (
        <SpinnerMini />
      ) : (
        <HiArrowRightOnRectangle className="w-5 h-5" />
      )}
    </button>
  );
}

export default Logout;
