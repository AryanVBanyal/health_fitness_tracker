import React from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const NavMenu = ({ setMenu, menu }) => {
  const HandleMenu = () => {
    setMenu(true);
  };
  const HandleCloseMenu = () => {
    setMenu(false);
  };
  return (
    <>
      {!menu && (
        <span
          onClick={HandleMenu}
          className="text-2xl text-secondary-light rounded-full   "
        >
          <IoMenu />
        </span>
      )}
      {menu && (
        <span
          onClick={HandleCloseMenu}
          className="text-2xl text-secondary-light rounded-full   "
        >
          <IoClose />
        </span>
      )}
    </>
  );
};

export default NavMenu;
