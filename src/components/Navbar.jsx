import React, { useContext } from "react";
import Switch from "../switch/Switch";
import { CrudContext } from "../context/CrudContext";

const Navbar = () => {
  const {checked} = useContext(CrudContext)
  return (
    <div className="navbar__general">
      <nav className={checked ? "navbar__night" : "navbar__day"}>
        <div className="navbar__logo">
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="navbar__infoSwitchInput">
          <ul className="navbar__list">
            <li className="navbar__item"></li>
            <li className="navbar__item"></li>
            <li className="navbar__item"></li>
          </ul>
          <div className="navbar__switch">
            <Switch />
          </div>
          <label htmlFor="check">
            <span className={checked ? "navbar__btnNigth" : "navbar__btnDay"}>
              ADD
            </span>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
