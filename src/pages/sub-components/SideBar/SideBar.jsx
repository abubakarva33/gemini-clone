import { Link, useNavigate } from "react-router-dom";
import "./SideBar.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addOpacityToColor, getDeviceName } from "../../../utilities/utilities";
import { FaRegEdit } from "react-icons/fa";
import { LuPanelLeftClose, LuSearchCode } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import moment from "moment";
import { setDesktopSideBar, setDevMode, setSidebarOpen } from "../../../redux/exploreDevSlice";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { history } = useSelector((state) => state.chatHistory);
  const { textColor, sideBg } = useSelector((state) => state.customizeSec);
  const [isHovered, setIsHovered] = useState(null);
  const [time, setTime] = useState(moment().format("hh:mm A"));
  const [device, setDevice] = useState("");
  setInterval(() => {
    setTime(moment().format("hh:mm A"));
  }, 1000 * 60);
  useEffect(() => {
    setDevice(getDeviceName());
  }, []);

  return (
    <div className="header w-100" style={{ backgroundColor: sideBg }}>
      <div className="header-items px-3" style={{ color: textColor }}>
        <div className="header-menu">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(setSidebarOpen(false));
              dispatch(setDesktopSideBar(false));
            }}
          >
            <LuPanelLeftClose />
          </span>
          <span style={{ cursor: "pointer" }}>
            <FaRegEdit />
          </span>
        </div>
        <button
          onClick={() => navigate("/")}
          style={{ backgroundColor: addOpacityToColor(sideBg, 0.25), color: textColor }}
        >
          <FiPlus /> New Chat
        </button>
        <button
          style={{ backgroundColor: addOpacityToColor(sideBg, 0.25), color: textColor }}
          onClick={() => {
            dispatch(setDevMode(true));
            navigate("/");
          }}
        >
          <LuSearchCode /> Explore Developer
        </button>
        {/* <span className="align-self-start px-2 mt-2">Recent</span> */}
        <div
          className="d-flex align-items-center flex-column-reverse items-container"
          // style={{ overflow: "auto", height: "calc(100dvh - 200px)" }}
        >
          {Object.values(history).map((item, ind) => (
            <Link
              key={ind}
              className="text-capitalize w-100 rounded px-2 py-1"
              style={{
                backgroundColor: isHovered === ind ? addOpacityToColor(sideBg, 0.25) : "",
                cursor: "pointer",
                color: textColor,
              }}
              to={`/${item[0].id}`}
              onMouseEnter={() => setIsHovered(ind)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {item[0].user?.length > 25 ? `${item[0].user?.slice(0, 25)}...` : item[0].user}
            </Link>
          ))}
        </div>
      </div>
      <div
        className="header-bottom"
        style={{ backgroundColor: addOpacityToColor(sideBg, 0.7), color: textColor }}
      >
        <span>{time}</span>
        <span className="px-1">|</span>
        <span>{device}</span>
      </div>
    </div>
  );
};

export default SideBar;
