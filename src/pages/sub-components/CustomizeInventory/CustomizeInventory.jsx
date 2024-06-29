import "./CustomizeInventory.css";
import { useDispatch, useSelector } from "react-redux";
import ColorPickerSection from "./ColorPickerSection";
import { restoreToDefault } from "../../../redux/customizeSlice";

const CustomizeInventory = () => {
  const dispatch = useDispatch();
  const {
    boxBg,
    boxBorderColor,
    boxBorderRound,
    slotBg,
    slotBorderColor,
    textColor,
    btnColor,
    tooltipBg,
    hudBg,
    healthColor,
    armorColor,
    hungerColor,
  } = useSelector((state) => state.customizeSec);

  const customizeData1 = [
    {
      type: "slotBg",
      color: slotBg,
      title: "SLOT BACKGROUND",
      allowAlpha: true,
    },
    {
      type: "slotBorderColor",
      color: slotBorderColor,
      title: "SLOT BORDER",
      allowAlpha: true,
    },
    {
      type: "textColor",
      color: textColor,
      title: "TEXT COLOR",
      allowAlpha: true,
    },
    {
      type: "tooltipBg",
      color: tooltipBg,
      title: "TOOLTIP BACKGROUND",
      allowAlpha: true,
    },
    {
      type: "hudBg",
      color: hudBg,
      title: "HUD BACKGROUND",
      allowAlpha: true,
    },
    {
      type: "healthColor",
      color: healthColor,
      title: "HEALTH COLOR",
      allowAlpha: false,
    },
    {
      type: "armorColor",
      color: armorColor,
      title: "ARMOR COLOR",
      allowAlpha: false,
    },
    {
      type: "hungerColor",
      color: hungerColor,
      title: "HUNGER COLOR",
      allowAlpha: false,
    },
  ];

  return (
    <div
      className="customizeArea px-2 pt-2"
      style={{
        backgroundColor: boxBg,
        border: `1px solid ${boxBorderColor}`,
        borderRadius: boxBorderRound,
        color: textColor,
      }}
    >
      <div
        className="d-flex align-items-center justify-content-center rounded mb-2"
        style={{
          border: `2px solid ${slotBorderColor}`,
          backgroundColor: btnColor,
          fontSize: 16,
          height: 30,
        }}
      >
        Customizer
      </div>

      <div
        style={{
          height: "calc(100% - 320px)",
          overflowX: "hidden",
          overflowY: "auto",
          width: "100%",
        }}
      >
        <div className="d-flex justify-content-between">
          <div className="dGrid">
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
        </div>
      </div>
      <div
        className="d-flex align-items-center justify-content-center rounded mb-2 mt-2"
        style={{
          border: `2px solid ${slotBorderColor}`,
          backgroundColor: btnColor,
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
