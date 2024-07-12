import { useSelector } from "react-redux";
import "./Response.css";
import { FaRegUserCircle } from "react-icons/fa";

const Response = ({ id }) => {
  const { history } = useSelector((state) => state.chatHistory);
  const { mainBg, sideBg, textColor, hungerColor } = useSelector((state) => state.customizeSec);
  return (
    <div>
      {id && Object.keys(history)?.length ? (
        <div>
          {history[id]?.map(({ user, res }, ind) => {
            const output = res.replace(/\* \*\*(.*?)\*\* /g, "<h6>$1</h6>");
            return (
              <div key={ind} className="d-flex align-items-end flex-column">
                <div
                  className="d-flex justify-content-end align-items-top"
                  style={{ maxWidth: "50%" }}
                >
                  <span
                    className="px-3 py-1"
                    style={{ backgroundColor: hungerColor, borderRadius: 20 }}
                  >
                    {user}
                  </span>
                  <div>
                    <FaRegUserCircle className="ms-1 mt-1 fs-3" />
                  </div>
                </div>

                <div className="d-flex justify-content-start align-items-top">
                  <FaRegUserCircle className="fs-1" />
                  <div dangerouslySetInnerHTML={{ __html: output }} className="mt-2" />
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
