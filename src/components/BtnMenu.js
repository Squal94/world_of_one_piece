import React from "react";
import { NavLink } from "react-router-dom";

const BtnMenu = ({ value }) => {
  return (
    <NavLink className="btnMenu" onClick={window.scrollTo({ top: 0 })}>
      {value}
    </NavLink>
  );
};

export default BtnMenu;

// className={(nav) => (nav.isActive ? "nav-active" : "")}
