import React from "react";
import BtnMenu from "./BtnMenu";
import { useDispatch } from "react-redux";
import { contentSelected } from "../features/general.slice";

const Header = () => {
  const dispatch = useDispatch();
  const menuTitles = [
    "Home",
    "Story",
    "Equipage",
    "Iles",
    "Fruits",
    "Events",
    "Contact",
  ];

  return (
    <div className="headerContainer">
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
