import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import SideBar from "../SideBar/SideBar";

const MainLayout = () => {
  return (
    <div className="mainBody">
      <div className="flex align-items-center px-3 bg-primary">
        <SideBar />
      </div>
      <div className="bg-secondary">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
