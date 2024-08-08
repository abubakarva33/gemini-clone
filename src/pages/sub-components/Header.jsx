import { Tooltip } from "antd";
import { LuPanelLeftClose, LuPanelRightClose, LuSearchCode } from "react-icons/lu";
import { MdEditLocationAlt, MdOutlineEditLocationAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addOpacityToColor } from "../../utilities/utilities";
import ExploreDev from "./ExploreDev";
import { setDesktopSideBar, setDevMode, setSidebarOpen } from "../../redux/exploreDevSlice";
import { useNavigate } from "react-router-dom";

const Header = ({ isCustomizeOpen, setIsCustomizeOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sideBg, textColor } = useSelector((state) => state.customizeSec);
  const { isDevMode, desktopSideBar } = useSelector((state) => state.devMode);
  return (
    <div className="d-flex flex-column w-100">
      <div
        className="d-flex align-items-center justify-content-between w-100 my-2 px-4"
        style={{ position: "relative", color: textColor }}
      >
        <span className={`logo ${!desktopSideBar ? "toggleLogo" : ""}`}>BongoBOT</span>
        <div className=" header-menu">
          <div
            className="exploreToggler px-2 rounded me-2"
            style={{ backgroundColor: addOpacityToColor(sideBg, 0.25), cursor: "pointer" }}
            onClick={() => {
              dispatch(setDevMode(true));
              navigate("/");
            }}
          >
            <LuSearchCode /> <span className="exploreBtn">Explore Developer</span>
          </div>

          <span
            className="sideMenuToggler"
            onClick={() => {
              dispatch(setDevMode(true));
              navigate("/");
            }}
          >
            <LuSearchCode style={{ cursor: "pointer" }} />
          </span>

          <span className="sideMenuToggler" onClick={() => dispatch(setSidebarOpen(true))}>
            <LuPanelRightClose className="sideMenu" style={{ cursor: "pointer" }} />
          </span>

          <div className="customizeBtn">
            {!isCustomizeOpen ? (
              <Tooltip placement="top" title="Customize">
                <MdOutlineEditLocationAlt
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsCustomizeOpen(true)}
                />
              </Tooltip>
            ) : (
              <Tooltip placement="top" title="Customize">
                <MdEditLocationAlt
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsCustomizeOpen(false)}
                />
              </Tooltip>
            )}
          </div>
        </div>
        {!desktopSideBar && (
          <span
            className="toggleBtn"
            onClick={() => {
              dispatch(setDesktopSideBar(true));
            }}
          >
            <LuPanelLeftClose className="sideMenu" style={{ fontSize: 25, cursor: "pointer" }} />
          </span>
        )}
      </div>
      {isDevMode && <ExploreDev />}
    </div>
  );
};

export default Header;
