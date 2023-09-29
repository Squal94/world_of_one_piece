import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { navToogle } from "../features/general.slice";

const BtnMenu = ({ value }) => {
  const dispatch = useDispatch();
  const navBar = document.querySelector(".headerContainer");
  const toogleBar = useSelector((state) => state.general.toolbar);

  const scrollZero = () => {
    window.scrollTo({ top: 0 });
    navBar.classList.remove("responsiveBar");
    dispatch(navToogle(!toogleBar));
  };

  return (
    <NavLink className="btnMenu" onClick={() => scrollZero()}>
      {value}
    </NavLink>
  );
};

export default BtnMenu;
