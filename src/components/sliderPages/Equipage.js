import React from "react";
import EquipageCard from "../EquipageCard";

const Equipage = () => {
  const iconsTop = ["Nami", "Chopper", "Luffy", "Francky", "Ussop"];
  const iconsBottom = ["Brook", "Jimbey", "Zorro", "Sanji", "Robin"];
  return (
    <div className="equipageContainer">
      <div className="equipageContainer--content">
        {iconsTop.map((icon) => (
          <EquipageCard id={icon} key={icon} index={iconsTop.indexOf(icon)} />
        ))}
      </div>
      <div className="equipageContainer--content">
        {iconsBottom.map((icon) => (
          <EquipageCard id={icon} key={icon} />
        ))}
      </div>
    </div>
  );
};

export default Equipage;
