import { Link, useNavigate } from "react-router-dom";
import "./SideBar.css";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { history } = useSelector((state) => state.chatHistory);
  const navigate = useNavigate();
  return (
    <div className="header w-100">
      <button onClick={() => navigate("/")}>New Chat</button>
      {Object.values(history).map((item, ind) => (
        <div key={ind} className="bg-secondary rounded px-3 py-1">
          <Link className="me-2" to={`/${item[0].id}`} key={item[0].id}>
            {item[0].user}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
