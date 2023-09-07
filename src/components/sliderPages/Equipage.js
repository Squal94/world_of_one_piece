import React from "react";
import EquipageCard from "../EquipageCard";
import { useSelector } from "react-redux";
import Modal from "../Modal";

const Equipage = () => {
  const iconsTop = ["Nami", "Chopper", "Luffy", "Franky", "Usopp"];
  const iconsBottom = ["Robin", "Sanji", "Zoro", "Jinbe", "Brook"];
  const modalActive = useSelector((state) => state.data.enableModal);
  const dataCharacter = useSelector((state) => state.data.modalData);

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
      {modalActive === true ? <Modal data={dataCharacter} /> : null}
    </div>
  );
};

export default Equipage;
