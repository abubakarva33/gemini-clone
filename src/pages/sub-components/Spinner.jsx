import { useState } from "react";
import { PropagateLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  //   let [loading, setLoading] = useState(true);
  //   let [color, setColor] = useState("#ffffff");
  return (
    <div className="sweet-loading">
      <PropagateLoader
        color={"#red"}
        loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
