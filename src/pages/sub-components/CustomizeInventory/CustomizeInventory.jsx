import "./CustomizeInventory.css";
import { useDispatch, useSelector } from "react-redux";
import ColorPickerSection from "./ColorPickerSection";
import { restoreToDefault } from "../../../redux/customizeSlice";

const CustomizeInventory = () => {
  const dispatch = useDispatch();
  const { mainBg, sideBg, textColor, hungerColor } = useSelector((state) => state.customizeSec);

  const customizeData1 = [
    {
      type: "sideBg",
      color: sideBg,
      title: "SIDE BAR",
      allowAlpha: true,
    },
    {
      type: "mainBg",
      color: mainBg,
      title: "BACKGROUND",
      allowAlpha: true,
    },
    {
      type: "textColor",
      color: textColor,
      title: "TEXT COLOR",
      allowAlpha: true,
    },
    {
      type: "hungerColor",
      color: hungerColor,
      title: "HUNGER COLOR",
      allowAlpha: false,
    },
  ];

  return (
    <div className="px-2 pt-2" style={{ backgroundColor: mainBg }}>
      <div
        className="d-flex align-items-center justify-content-center rounded mb-2"
        style={{
          border: `1px solid `,
          fontSize: 16,
          height: 30,
        }}
      >
        Customizer
      </div>

      <div
        style={{
          height: "calc(100dvh - 250px)",
          overflowX: "hidden",
          overflowY: "auto",
          width: "100%",
        }}
        className=" dGrid"
      >
        {customizeData1?.map((item, ind) => (
          <ColorPickerSection
            key={ind}
            type={item?.type}
            color={item?.color}
            title={item?.title}
            allowAlpha={item?.allowAlpha}
          />
        ))}
      </div>
      <div
        className="d-flex align-items-center justify-content-center rounded mb-2 mt-2"
        style={{
          border: `1px solid `,
          fontSize: 16,
          height: 30,
          cursor: "pointer",
        }}
        onClick={() => dispatch(restoreToDefault())}
      >
        Restore Default
      </div>
    </div>
  );
};

export default CustomizeInventory;
