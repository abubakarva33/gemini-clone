import { useSelector } from "react-redux";
import "./Response.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { addOpacityToColor, getFormattedResponse } from "../../../utilities/utilities";

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
            const output = getFormattedResponse(res);

            console.log(output);

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
                  <div dangerouslySetInnerHTML={{ __html: output }} />
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
