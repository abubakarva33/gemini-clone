import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import Header from "../Header/Header";

const MainLayout = () => {
  return (
    <div className="mainBody">
      <Header />
      <div>
        <Outlet />
      </div>
      <div className="footer w-100">
        <p className="mb-0 text-center">
          Copyright &copy; {new Date().getFullYear()} By Abubakar Siddik. Built with Redux.
        </p>
      </div>
    </div>
  );
};

export default MainLayout;
