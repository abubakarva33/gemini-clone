import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import SideBar from "../pages/sub-components/SideBar/SideBar";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { sideBg, mainBg } = useSelector((state) => state.customizeSec);
  return (
    <div className="mainBody">
      <div
        className="flex align-items-center overflow-auto"
        style={{
          backgroundColor: sideBg,
        }}
      >
        <SideBar />
      </div>
      <div
        className="px-4 pt-1"
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
