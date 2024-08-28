import { PropagateLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  const override = {
    display: "block",
    margin: "0 50px",
    borderColor: "blue",
  };
  return (
    <div className="sweet-loading">
      <PropagateLoader
        color={"blue"}
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
