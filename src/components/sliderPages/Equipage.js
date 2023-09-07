import React from "react";
import EquipageCard from "../EquipageCard";

const Equipage = () => {
  const iconsTop = ["Nami", "Chopper", "Luffy", "Franky", "Usopp"];
  const iconsBottom = ["Robin", "Sanji", "Zoro", "Jinbe", "Brook"];

  return (
    <div className="equipageContainer">
      <div className="equipageContainer--top">
        {iconsTop.map((icon) => (
          <EquipageCard id={icon} key={icon} index={iconsTop.indexOf(icon)} />
        ))}
      </div>
      <div className="equipageContainer--bottom">
        {iconsBottom.map((icon, i) => (
          <EquipageCard id={icon} key={icon} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Equipage;
