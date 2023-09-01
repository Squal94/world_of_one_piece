import React from "react";
import { NavLink } from "react-router-dom";

const BtnMenu = ({ value }) => {
  return <NavLink className="btnMenu">{value}</NavLink>;
};

export default BtnMenu;

// className={(nav) => (nav.isActive ? "nav-active" : "")}
