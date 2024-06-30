import { Link, useNavigate } from "react-router-dom";
import "./SideBar.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDeviceName } from "../../../utilities/utilities";
// import { useEffect, useState } from "react";

const SideBar = () => {
  const navigate = useNavigate();
  const { history } = useSelector((state) => state.chatHistory);
  const { mainBg, sideBg } = useSelector((state) => state.customizeSec);
  const [isHovered, setIsHovered] = useState(null);
  useEffect(() => {
    const deviceName = getDeviceName();
    console.log(deviceName);
  }, []);

  // console.log({ location, status });
  return (
    <div className="header px-3 w-100" style={{ backgroundColor: sideBg }}>
      <div>
        <button onClick={() => navigate("/")}>New Chat</button>
        {Object.values(history).map((item, ind) => (
          <div
            key={ind}
            className="rounded px-2 py-1"
            style={{ backgroundColor: isHovered === ind ? mainBg : "initial" }}
            onMouseEnter={() => setIsHovered(ind)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <Link className="me-2 text-capitalize" to={`/${item[0].id}`} key={item[0].id}>
              {item[0].user?.length > 25 ? `${item[0].user?.slice(0, 25)}...` : item[0].user}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <h1>Dev</h1>
      </div>
    </div>
  );
};

export default SideBar;
