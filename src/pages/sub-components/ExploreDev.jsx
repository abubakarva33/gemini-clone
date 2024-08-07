import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { addOpacityToColor } from "../../utilities/utilities";

const ExploreDev = () => {
  const { sideBg, textPrimary } = useSelector((state) => state.customizeSec);
  return (
    <div className="exploreDev mt-1" style={{ backgroundColor: addOpacityToColor(sideBg, 0.8) }}>
      <span>Limited Access: Developer Information Only Provided</span>
      <MdClose className="ms-2 fs-5" style={{ cursor: "pointer" }} />
    </div>
  );
};

export default ExploreDev;
