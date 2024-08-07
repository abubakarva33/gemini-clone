import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addOpacityToColor } from "../../utilities/utilities";
import { setDevMode } from "../../redux/exploreDevSlice";
import { useNavigate } from "react-router-dom";

const ExploreDev = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sideBg, textPrimary } = useSelector((state) => state.customizeSec);
  return (
    <div className="exploreDev mt-1" style={{ backgroundColor: addOpacityToColor(sideBg, 0.8) }}>
      <span>Limited Access: Developer Information Only Provided</span>
      <MdClose
        className="ms-2 fs-5"
        style={{ cursor: "pointer" }}
        onClick={() => {
          dispatch(setDevMode(false));
          navigate("/");
        }}
      />
    </div>
  );
};

export default ExploreDev;
