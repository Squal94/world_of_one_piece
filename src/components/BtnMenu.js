import React from "react";
import { NavLink } from "react-router-dom";

const BtnMenu = ({ value }) => {
  return (
    <NavLink to={`/${value.toLowerCase()}`} className="btnMenu">
      {value}
    </NavLink>
  );
};

export default BtnMenu;
