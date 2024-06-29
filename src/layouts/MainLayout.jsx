import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import SideBar from "../pages/sub-components/SideBar/SideBar";

const MainLayout = () => {
  return (
    <div className="mainBody">
      <div className="flex align-items-center px-3 bg-secondary overflow-auto">
        <SideBar />
      </div>
      <div className=" overflow-auto position-sticky bottom-0 left-0 pe-3">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
