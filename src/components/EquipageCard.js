import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const EquipageCard = ({ id, index }) => {
  const duration = 500;
  const delay = 400;

  const animStr = (i) =>
    `begin-animation ${duration}ms ease-out ${delay * (i + 1)}ms forwards`;

  const dataSelector = (name) => {
    axios
      .get(`https://api.api-onepiece.com/characters/crew/1`)
      .then((res) =>
        console.log(res.data.find((e) => e.french_name.includes(name)))
      );
  };

  return (
    <NavLink
      className="equipageCard"
      id={id}
      style={{ animation: animStr(index) }}
      onClick={() => dataSelector(id)}
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
