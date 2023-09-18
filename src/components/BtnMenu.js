import React from "react";
import { NavLink } from "react-router-dom";

const BtnMenu = ({ value }) => {
  const scrollZero = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <NavLink className="btnMenu" onClick={() => scrollZero()}>
      {value}
    </NavLink>
  );
};

export default BtnMenu;

// className={(nav) => (nav.isActive ? "nav-active" : "")}
