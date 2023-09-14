import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FruitAffichage = ({ value }) => {
  const [fruitSelected, setFruitSelected] = useState("");
  const fruits = useSelector((state) => state.data.fruitsData);

  useEffect(() => {
    value &&
      fruits.forEach((object) => {
        if (object.roman_name.toLowerCase() === value.toLowerCase()) {
          setFruitSelected(object);
        }
      });
  }, [fruits, value]);
  console.log(fruitSelected);

  return (
    <div className="fruitSelected">
      <h1>{fruitSelected.roman_name}</h1>
      <div className="fruitSelected__container">
        <div className="fruitSelected__container--info">
          <p>Nom en francais : {fruitSelected.french_name} </p>
          <p>Type : {fruitSelected.type}</p>
        </div>
        <img
          src={
            `/assets/fruits/${value}.png `
              ? `/assets/fruits/${value}.png`
              : `/assets/fruits/No_image.png`
          }
          alt={value}
        />
        <div className="fruitSelected__container--definition">
          <h2>Description : </h2>
          <p>{fruitSelected.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FruitAffichage;
