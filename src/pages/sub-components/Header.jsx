import { useState } from "react";
import { LuSearchCode } from "react-icons/lu";
import { MdEditLocationAlt, MdOutlineEditLocationAlt } from "react-icons/md";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className="d-flex align-items-center justify-content-between w-100 my-2"
      style={{ color: "#7d7d7d" }}
    >
      <span style={{ fontSize: 22, fontWeight: 600 }}>BongoBOT</span>
      <div className="d-flex align-items-center">
        <div
          className="px-2 py-1 rounded me-2"
          style={{ backgroundColor: "rgba(244, 244, 244,1)", cursor: "pointer" }}
        >
          <LuSearchCode style={{ fontSize: 20 }} /> <span>Explore Developer</span>
        </div>
        {!isClicked ? (
          <MdOutlineEditLocationAlt
            style={{ fontSize: 25, cursor: "pointer" }}
            onClick={() => setIsClicked(true)}
          />
        ) : (
          <MdEditLocationAlt
            style={{ fontSize: 25, cursor: "pointer" }}
            onClick={() => setIsClicked(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
