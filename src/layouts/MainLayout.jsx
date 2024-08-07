import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import SideBar from "../pages/sub-components/SideBar/SideBar";
import { useSelector } from "react-redux";
import { useState } from "react";
import { LuPanelRightClose } from "react-icons/lu";

const MainLayout = () => {
  const { sideBg, mainBg } = useSelector((state) => state.customizeSec);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="mainBody">
      <div
        className={`${
          window.innerWidth < 850 && sidebarOpen ? "sideBar" : ""
        } flex align-items-center overflow-auto`}
        // style={{
        //   backgroundColor: sideBg,
        // }}
      >
        <SideBar />
      </div>

      <div
        className="pt-1"
        style={{
          backgroundColor: mainBg,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
