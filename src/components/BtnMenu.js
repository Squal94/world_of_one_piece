import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BtnMenu = ({ value }) => {
  const navBar = document.querySelector(".headerContainer");
  // const [closeNav, setCloseNav] = useState(false);

  const scrollZero = () => {
    window.scrollTo({ top: 0 });
    // setCloseNav(true);
  };

  // useEffect(() => {
  //   if (closeNav === true) {
  //     navBar.classList.remove("responsiveBar");
  //     setCloseNav(false);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [closeNav]);

  return (
    <NavLink className="btnMenu" onClick={() => scrollZero()}>
      {value}
    </NavLink>
  );
};

export default BtnMenu;
