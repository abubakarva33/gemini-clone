import { useSelector } from "react-redux";
import { addOpacityToColor } from "../../utilities/utilities";
import { useState } from "react";

const hotQuestions = [
  { ques: "Briefly describe the developer." },
  { ques: "Describe the developer's education, skill and experience" },
  { ques: "Describe the developer's professional background" },
  { ques: "Describe the developer's recent projects" },
];

const HotQuestions = ({ id }) => {
  const { sideBg, textPrimary } = useSelector((state) => state.customizeSec);
  const [isHovered, setIsHovered] = useState(null);
  return (
    <>
      {!id && (
        <div className="hot-questions">
          {hotQuestions?.map((item, ind) => (
            <div
              onMouseEnter={() => setIsHovered(ind)}
              onMouseLeave={() => setIsHovered(null)}
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
