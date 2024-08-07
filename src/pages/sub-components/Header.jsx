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
  const { sideBg } = useSelector((state) => state.customizeSec);
  const { isDevMode, desktopSideBar } = useSelector((state) => state.devMode);
  return (
    <div className="d-flex flex-column w-100">
      <div
        className="d-flex align-items-center justify-content-between w-100 my-2 px-4"
        style={{ position: "relative", color: "#7d7d7d" }}
      >
        <span style={{ fontSize: 22, fontWeight: 600, marginLeft: !desktopSideBar && 40 }}>
          BongoBOT
        </span>
        <div className="d-flex align-items-center">
          <div
            className="px-2 py-1 rounded me-2"
            style={{ backgroundColor: addOpacityToColor(sideBg, 0.25), cursor: "pointer" }}
            onClick={() => {
              dispatch(setDevMode(true));
              navigate("/");
            }}
          >
            <LuSearchCode style={{ fontSize: 20 }} /> <span>Explore Developer</span>
          </div>

          <span className="sideMenuToggler" onClick={() => dispatch(setSidebarOpen(true))}>
            <LuPanelRightClose className="sideMenu" style={{ fontSize: 25, cursor: "pointer" }} />
          </span>

          <div className="customizeBtn">
            {!isCustomizeOpen ? (
              <Tooltip placement="top" title="Customize">
                <MdOutlineEditLocationAlt
                  style={{ fontSize: 25, cursor: "pointer" }}
                  onClick={() => setIsCustomizeOpen(true)}
                />
              </Tooltip>
            ) : (
              <Tooltip placement="top" title="Customize">
                <MdEditLocationAlt
                  style={{ fontSize: 25, cursor: "pointer" }}
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
