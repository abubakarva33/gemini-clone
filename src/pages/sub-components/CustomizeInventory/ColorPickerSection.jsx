import { HexAlphaColorPicker, HexColorInput, HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from "react-redux";
import { customizeInventory } from "../../../redux/customizeSlice";

const ColorPickerSection = ({ children, type, color, title, allowAlpha }) => {
  const dispatch = useDispatch();
  const { textColor, btnColor } = useSelector((state) => state.customizeSec);
  const handleColorChange = (property) => (newColor) => {
    dispatch(customizeInventory({ [property]: newColor }));
  };
  return (
    <div className="colorPickerSection">
      <div
        className=" flex items-center justify-between px-2 py-1 mb-2"
        style={{ backgroundColor: btnColor, color: textColor, fontSize: 10 }}
      >
        {title}
      </div>

      <div>
        {allowAlpha ? (
          <HexAlphaColorPicker color={color} onChange={handleColorChange(type)} />
        ) : (
          <HexColorPicker color={color} onChange={handleColorChange(type)} />
        )}
      </div>

      {children}
    </div>
  );
};

export default ColorPickerSection;
