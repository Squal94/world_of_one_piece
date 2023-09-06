import React from "react";
import { NavLink } from "react-router-dom";

const EquipageCard = ({ id }) => {
  console.log(id);
  return (
    <NavLink className="equipageCard" id={id}>
      <div className="equipageCardContainer">
        <h1 className="equipageCardContainer--title">{id}</h1>
        <img
          className="equipageCardContainer--img"
          src={`/assets/iconEquipage/${id.toLowerCase()}Pc.png`}
          alt="Roronoa Zoro"
        />
      </div>
    </NavLink>
  );
};

export default EquipageCard;
