import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="header w-100">
      <h6>
        PRAN <span style={{ color: "rgb(242,112,2)" }}>RFL</span>
      </h6>

      <div className="navItems">
        <p> ABOUT US</p>
        <p> CONTACT US</p>
      </div>
    </div>
  );
};

export default SideBar;
