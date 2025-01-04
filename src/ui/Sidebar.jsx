import {
  HiMiniUserGroup,
  HiOutlineCog6Tooth,
  HiOutlineHome,
} from "react-icons/hi2";
import { TbUsersPlus } from "react-icons/tb";
import { VscDashboard } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

function Sidebar({ isSidebarOpen }) {
  return (
    <aside
      className={`fixed top-0 w-64 lg:w-72 h-screen pt-24 z-30 transition-transform ${
        isSidebarOpen ? "translate-x-0 " : "-translate-x-full"
      } bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-700 dark:border-gray-800`}
    >
      <div className="h-full">
        <ul className="flex flex-col gap-2 px-2">
          <li className="px-3">
            <NavLink to="/" className="sidebarItem">
              <HiOutlineHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink to="dashboard" className="sidebarItem">
              <VscDashboard />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li className="px-3">
            <NavLink to="members" className="sidebarItem">
              <HiMiniUserGroup />
              <span>Members</span>
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink to="user" className="sidebarItem">
              <TbUsersPlus />

              <span>Users</span>
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink to="settings" className="sidebarItem">
              <HiOutlineCog6Tooth />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
