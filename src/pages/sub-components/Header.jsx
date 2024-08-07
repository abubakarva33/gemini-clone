import { Tooltip } from "antd";
import { LuSearchCode } from "react-icons/lu";
import { MdEditLocationAlt, MdOutlineEditLocationAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addOpacityToColor } from "../../utilities/utilities";
import ExploreDev from "./ExploreDev";
import { setDevMode } from "../../redux/exploreDevSlice";
import { useNavigate } from "react-router-dom";

const Header = ({ isCustomizeOpen, setIsCustomizeOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sideBg } = useSelector((state) => state.customizeSec);
  const { isDevMode } = useSelector((state) => state.devMode);
  return (
    <div className="d-flex flex-column w-100">
      <div
        className="d-flex align-items-center justify-content-between w-100 my-2 px-4"
        style={{ color: "#7d7d7d" }}
      >
        <span style={{ fontSize: 22, fontWeight: 600 }}>BongoBOT</span>
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
      {isDevMode && <ExploreDev />}
    </div>
  );
};

export default Header;
