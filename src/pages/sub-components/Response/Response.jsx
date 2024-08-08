import { useSelector } from "react-redux";
import "./Response.css";
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
      {id && Object.keys(history)?.length && (
        <div>
          {history[id]?.map(({ user, res }, ind) => {
            const output = getFormattedResponse(res);
            return (
              <div key={ind} className="exploreBtn d-flex align-items-end flex-column">
                <div
                  className="d-flex justify-content-end align-items-top userResponse"
                >
                  <span className="px-3 py-1" style={myStyle}>
                    {user}
                  </span>
                  <div className="userResLogo">
                    <FaCircleUser className="ms-1 mt-1" />
                  </div>
                </div>

                <div className="d-flex justify-content-start align-items-top">
                  <img
                    src="/images/logo.webp"
                    className="responseLogo mt-1 me-2"
                    alt="BongoBOT logo"
                  />
                  <div dangerouslySetInnerHTML={{ __html: output }} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Response;
