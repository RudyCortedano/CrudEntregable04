import React, { useContext } from "react";
import Switch from "../switch/Switch";
import { CrudContext } from "../context/CrudContext";

const Navbar = () => {
  const {checked, handleCancelReset} = useContext(CrudContext)
  return (
    <div className="navbar__general">
      <nav className={checked ? "navbar__nigth" : "navbar__day"}>
        <div className="navbar__logo">
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="navbar__infoSwitchInput">  
          <div className="navbar__switch">
            <Switch />
          </div>
          <label onClick={() => handleCancelReset()} htmlFor="check">
            <span  className={checked ? "navbar__btnNigth" : "navbar__btnDay"}>
              ADD
            </span>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
