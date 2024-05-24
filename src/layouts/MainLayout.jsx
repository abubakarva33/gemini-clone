import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import SideBar from "../pages/sub-components/SideBar/SideBar";

const MainLayout = () => {
  return (
    <div className="mainBody">
      <div className="flex align-items-center px-3 border">
        <SideBar />
      </div>
      <div className="border">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
