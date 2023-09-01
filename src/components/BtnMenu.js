import React from "react";
import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { contentSelected } from "../features/general.slice";

const BtnMenu = ({ value }) => {
  // const dispatch = useDispatch();

  return <NavLink className="btnMenu">{value}</NavLink>;
};

export default BtnMenu;
