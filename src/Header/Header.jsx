import HeaderDrawer from "./HeaderDrawer";

import "./Header.css";
// import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header w-100">
      <h6>
        PRAN <span style={{ color: "rgb(242,112,2)" }}>RFL</span>
      </h6>

      <div className="navItems">
        <p> ABOUT US</p>
        <p> CONTACT US</p>
        <HeaderDrawer />
      </div>
    </div>
  );
};

export default Header;
