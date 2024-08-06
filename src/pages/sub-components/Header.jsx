import { Tooltip } from "antd";
import { LuSearchCode } from "react-icons/lu";
import { MdEditLocationAlt, MdOutlineEditLocationAlt } from "react-icons/md";
import { useSelector } from "react-redux";
import { addOpacityToColor } from "../../utilities/utilities";

const Header = ({ isCustomizeOpen, setIsCustomizeOpen }) => {
  const { sideBg } = useSelector((state) => state.customizeSec);
  return (
    <div
      className="d-flex align-items-center justify-content-between w-100 my-2"
      style={{ color: "#7d7d7d" }}
    >
      <span style={{ fontSize: 22, fontWeight: 600 }}>BongoBOT</span>
      <div className="d-flex align-items-center">
        <div
          className="px-2 py-1 rounded me-2"
          style={{ backgroundColor: addOpacityToColor(sideBg, 0.25), cursor: "pointer" }}
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
  );
};

export default Header;
