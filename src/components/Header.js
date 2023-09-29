import React, { useEffect, useState } from "react";
import BtnMenu from "./BtnMenu";
import { useDispatch } from "react-redux";
import { contentSelected } from "../features/general.slice";

const Header = () => {
  const dispatch = useDispatch();
  const [toogleBar, setToogleBar] = useState(true);
  const navBar = document.querySelector(".headerContainer");
  useEffect(() => {
    if (!toogleBar) {
      navBar?.classList.add("responsiveBar");
    } else {
      navBar?.classList.remove("responsiveBar");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toogleBar]);

  const menuTitles = [
    "Home",
    "Story",
    "Equipage",
    "Fruits",
    "Events",
    "Contact",
  ];

  return (
    <div className="headerContainer">
      <p
        className="headerContainer__responsive"
        onClick={() => setToogleBar(!toogleBar)}
      >
        Menu
      </p>
      <div className="headerContainer--logo">
        <img
          src="/assets/i0l2badcfgquntgjngvfh6al7h-605f5464df6a70f5b6479cda9b1c12ec.png"
          alt="Logo onepiece"
        />
      </div>
      <nav className="headerContainer__nav">
        <ul>
          {menuTitles.map((title) => {
            return (
              <li
                key={title}
                onClick={() => {
                  dispatch(contentSelected(title));
                }}
              >
                <BtnMenu value={title} />
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="headerContainer--goodies">
        <img src="/assets/goodies.png" alt="Luffy assis" />
      </div>
    </div>
  );
};

export default Header;

// className={(nav) => (nav.isActive ? "nav-active" : "")}

// useEffect(() => {
//   if (toogleBar === true) {
//     // if (toogleBar === true) {
//     //   navBar?.classList.add("responsiveBar");
//     // } else {
//     //   setToogleBar(false);
//     //   navBar?.classList.remove("responsiveBar");
//     // }
//     if (navBarResponsive) {
//       console.log("true");
//     }
//   } else {
//     if (navBarResponsive) {
//       console.log("not");
//     }
//     // setToogleBar(false);
//   }
// }, [navBarResponsive, toogleBar]);

// const windowSize = window.innerWidth;

// useEffect(() => {
//   const handleWindowResize = () => {
//     setWindowSize(window.innerWidth);
//   };
//   window.addEventListener("resize", handleWindowResize);
//   if (windowSize > 580) {
//     setToogleBar(false);
//   } else {
//     if (toogleBar === false) {
//       navBar?.classList.add("responsiveBar");
//     } else {
//       navBar?.classList.remove("responsiveBar");
//     }
//   }
//   return () => {
//     window.removeEventListener("resize", handleWindowResize);
//   };
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [toogleBar, windowSize]);
