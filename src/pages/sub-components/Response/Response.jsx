import { useSelector } from "react-redux";
import "./Response.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { addOpacityToColor } from "../../../utilities/utilities";

const Response = ({ id }) => {
  const { history } = useSelector((state) => state.chatHistory);
  const { mainBg, sideBg, textColor, hungerColor } = useSelector((state) => state.customizeSec);

  const myStyle = {
    background: `linear-gradient(90deg, ${addOpacityToColor(
      hungerColor,
      0.09
    )} 0%, ${addOpacityToColor(hungerColor, 0.3)} 50%, ${addOpacityToColor(
      hungerColor,
      0.09
    )} 100%)`,
    borderRadius: 20,
  };
  return (
    <div>
      {id && Object.keys(history)?.length ? (
        <div>
          {history[id]?.map(({ user, res }, ind) => {
            const response =
              res
                // Replace newlines with HTML line breaks
                .replace(/\n/g, "<br>")
                // Format ## example as h4 and bold, ensuring no extra <br> tags are added
                .replace(/## (.*?)(<br>|$)/g, "<h4><strong>$1</strong></h4>")
                // Format text within **...** as bold and remove **
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                // Add bullet points for each section ending with :
                .replace(/(\b[\w\s]+:)\b/g, "<br><ul><li><strong>$1</strong></li>") + "</ul>";

            return (
              <div key={ind} className="d-flex align-items-end flex-column">
                <div
                  className="d-flex justify-content-end align-items-top"
                  style={{ maxWidth: "50%" }}
                >
                  <span className="px-3 py-1" style={myStyle}>
                    {user}
                  </span>
                  <div>
                    <FaCircleUser className="ms-1 mt-1 fs-3" />
                  </div>
                </div>

                <div className="d-flex justify-content-start align-items-top">
                  <img
                    src="/images/logo.webp"
                    className="mt-1 me-2"
                    alt="BongoBOT logo"
                    style={{ height: 30, width: 30, borderRadius: 50 }}
                  />
                  <div dangerouslySetInnerHTML={{ __html: response }} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Response;
