import { useSelector } from "react-redux";
import "./Response.css";

const Response = ({ id }) => {
  const { history } = useSelector((state) => state.chatHistory);
  return (
    <div>
      {id && Object.keys(history)?.length ? (
        <div>
          <h1>History</h1>
          {history[id]?.map(({ user, res }, ind) => {
            const output = res.replace(/\* \*\*(.*?)\*\* /g, "<h6>$1</h6>");
            return (
              <div key={ind}>
                <h5>
                  {ind + 1} {user}
                </h5>
                <p>
                  <div dangerouslySetInnerHTML={{ __html: output }} />
                </p>
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
