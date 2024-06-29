import { useSelector } from "react-redux";
import "./Response.css";
import { FaRegUserCircle } from "react-icons/fa";

const Response = ({ id }) => {
  const { history } = useSelector((state) => state.chatHistory);
  return (
    <div>
      {id && Object.keys(history)?.length ? (
        <div>
          {history[id]?.map(({ user, res }, ind) => {
            const output = res.replace(/\* \*\*(.*?)\*\* /g, "<h6>$1</h6>");
            return (
              <div key={ind}>
                <div className="d-flex justify-content-end">
                  <span>{user}</span>
                  <FaRegUserCircle />
                </div>

                <div dangerouslySetInnerHTML={{ __html: output }} className="mt-2" />
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
