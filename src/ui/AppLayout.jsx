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
      <div className="flex justify-center w-auto p-2 mt-20 overflow-auto bg-gray-700 sm:px-10 h-fit font-robotoMono lg:block lg:justify-normal lg:ml-72 ">
        <div className="w-auto h-auto min-h-screen lg:h-auto">
          <div className="max-w-[24rem] sm:max-w-screen-md py-4 sm:px-24 lg:max-w-screen-xl lg:h-auto lg:pt-12 lg:pl-36">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
