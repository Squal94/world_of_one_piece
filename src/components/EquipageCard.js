import React from "react";
import { NavLink } from "react-router-dom";

const EquipageCard = ({ id, index }) => {
  const duration = 700;
  const delay = 500;

  const animStr = (i) =>
    `begin-animation ${duration}ms ease-out ${delay * (i + 1)}ms forwards`;

  return (
    <NavLink
      className="equipageCard"
      id={id}
      style={{ animation: animStr(index) }}
    >
      <div className="equipageCardContainer">
        <h1 className="equipageCardContainer--title">{id}</h1>
        <img
          className="equipageCardContainer--img"
          src={`/assets/iconEquipage/${id.toLowerCase()}Pc.png`}
          alt={id}
        />
      </div>
    </NavLink>
  );
};

export default EquipageCard;
