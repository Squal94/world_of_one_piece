import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const EquipageCard = ({ id, index }) => {
  const [afterDelay, setAfterDelay] = useState(false);
  const DELAY_TIME = 50;

  setTimeout(() => setAfterDelay(true), index * DELAY_TIME);

  return (
    afterDelay && (
      <NavLink className="equipageCard" id={id}>
        <div className="equipageCardContainer">
          <h1 className="equipageCardContainer--title">{id}</h1>
          <img
            className="equipageCardContainer--img"
            src={`/assets/iconEquipage/${id.toLowerCase()}Pc.png`}
            alt={id}
          />
        </div>
      </NavLink>
    )
  );
};

export default EquipageCard;
