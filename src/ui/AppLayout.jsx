import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className="h-full">
      <Header handleClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex justify-center mt-20 bg-gray-700 sm:block sm:justify-normal sm:ml-72">
        <div className="h-screen max-w-xs pt-4 sm:max-w-screen-xl sm:pt-12 sm:pl-36">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
