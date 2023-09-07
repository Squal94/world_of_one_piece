import React from "react";
import { NavLink } from "react-router-dom";

const EquipageCard = ({ id, index }) => {
  // const [afterDelay, setAfterDelay] = useState(false);
  const duration = 1000; // ms
  const delay = 800; // ms

  const animStr = (i) =>
    `begin-animation ${duration}ms ease-out ${delay * (i + 1)}ms forwards`;
  // const DELAY_TIME = 100;

  // setTimeout(() => setAfterDelay(true), index * DELAY_TIME);

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
