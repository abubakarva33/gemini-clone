import { Link, useNavigate } from "react-router-dom";
import "./SideBar.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addOpacityToColor, getDeviceName } from "../../../utilities/utilities";
import { FaRegEdit } from "react-icons/fa";
import { LuPanelLeftClose, LuPanelRightClose, LuSearchCode } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import moment from "moment";
// import { useEffect, useState } from "react";

const SideBar = () => {
  const navigate = useNavigate();
  const { history } = useSelector((state) => state.chatHistory);
  const { mainBg, sideBg } = useSelector((state) => state.customizeSec);
  const [isHovered, setIsHovered] = useState(null);
  const [time, setTime] = useState(moment().format("hh:mm A"));
  const [device, setDevice] = useState("");
  setInterval(() => {
    setTime(moment().format("hh:mm A"));
  }, 1000 * 60);
  useEffect(() => {
    setDevice(getDeviceName());
  }, []);

  // console.log({ location, status });
  return (
    <div className="header w-100" style={{ backgroundColor: sideBg }}>
      <div className="header-items px-3">
        <div className="header-menu">
          <span>
            <LuPanelLeftClose />
          </span>
          {/* <span>
            <LuPanelRightClose />
          </span> */}
          <span>
            <FaRegEdit />
          </span>
        </div>
        <button
          onClick={() => navigate("/")}
          style={{ backgroundColor: addOpacityToColor(sideBg, 0.25) }}
        >
          <FiPlus /> New Chat
        </button>
        <button
          onClick={() => navigate("/")}
          style={{ backgroundColor: addOpacityToColor(sideBg, 0.25) }}
        >
          <LuSearchCode /> Explore Developer
        </button>
        <div className="d-flex align-items-center flex-column mt-2">
          <span className="align-self-start px-2">Recent</span>
          {Object.values(history).map((item, ind) => (
            <Link
              key={ind}
              className="text-capitalize w-100 rounded px-2 py-1"
              style={{ backgroundColor: isHovered === ind ? mainBg : "", cursor: "pointer" }}
              to={`/${item[0].id}`}
              onMouseEnter={() => setIsHovered(ind)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {item[0].user?.length > 25 ? `${item[0].user?.slice(0, 25)}...` : item[0].user}
            </Link>
          ))}
        </div>
      </div>
      <div className="header-bottom" style={{ backgroundColor: addOpacityToColor(sideBg, 0.7) }}>
        <span>{time}</span>
        <span className="px-1">|</span>
        <span>{device}</span>
      </div>
    </div>
  );
};

export default SideBar;
