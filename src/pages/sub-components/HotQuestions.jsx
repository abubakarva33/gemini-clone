import { useDispatch, useSelector } from "react-redux";
import { addOpacityToColor } from "../../utilities/utilities";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import run from "../../config/gemini";
import { devDetails } from "../../utilities/devInfo";
import { setRes } from "../../redux/ChatHistorySlice";

const hotQuestions = [
  { ques: "Briefly describe the developer." },
  { ques: "Describe the developer's education, skill and experience" },
  { ques: "Describe the developer's professional background" },
  { ques: "Describe the developer's recent projects" },
];

const HotQuestions = ({ id, setIsLoading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sideBg } = useSelector((state) => state.customizeSec);
  const [isHovered, setIsHovered] = useState(null);
  const chatResponseHandler = async (inputValue) => {
    setIsLoading(true);
    try {
      const data = await run(devDetails + inputValue);
      const newId = id || new Date().getTime();
      dispatch(setRes({ user: inputValue, res: data, id: newId }));
      if (!id) {
        navigate("/" + newId);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {!id && (
        <div className="hot-questions">
          {hotQuestions?.map((item, ind) => (
            <div
              onMouseEnter={() => setIsHovered(ind)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => chatResponseHandler(item?.ques)}
              key={ind}
              style={{
                backgroundColor: isHovered === ind ? sideBg : "",
                border: `1.5px solid ${addOpacityToColor(sideBg, 0.5)}`,
                cursor: "pointer",
              }}
            >
              {item?.ques}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HotQuestions;
