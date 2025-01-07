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
    <div className="h-full overflow-x-hidden">
      <Header handleClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex justify-center w-auto p-2 pt-24 bg-gray-600 sm:px-10 h-fit font-robotoMono lg:block lg:justify-normal lg:ml-72 ">
        <div className="w-auto h-auto min-h-screen lg:h-auto">
          <div className="max-w-xs py-4 sm:max-w-screen-md sm:px-24 xl:max-w-screen-2xl lg:h-auto lg:pt-12 lg:pl-36">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
