import { useState } from "react";
import { Drawer } from "antd";
// import { FaBars } from "react-icons/fa";
const HeaderDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* <FaBars onClick={showDrawer} className="menubar" /> */}
      <Drawer title="header Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default HeaderDrawer;
