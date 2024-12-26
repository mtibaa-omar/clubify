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
      <div className="flex justify-center w-auto h-auto mt-20 bg-gray-700 font-robotoMono sm:block sm:justify-normal sm:ml-72">
        <div className="w-auto h-auto min-h-screen sm:h-screen">
          <div className="max-w-[24rem] py-4 sm:max-w-screen-xl sm:pt-12 sm:pl-36">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
