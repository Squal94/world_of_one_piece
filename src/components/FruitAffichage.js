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

  return (
    <div className="fruitSelected">
      <h1>{fruitSelected.roman_name}</h1>

      <div className="fruitSelected--info">
        <p>Nom en francais : {fruitSelected.french_name} </p>
        <p>Type : {fruitSelected.type}</p>
      </div>

      <img
        className="fruitSelected--img"
        src={`/assets/fruits/${value}.png`}
        alt={value}
      />

      <div className="fruitSelected--definition">
        <h2>Description : </h2>
        <p>{fruitSelected.description}</p>
      </div>
    </div>
  );
};

export default FruitAffichage;

// const [fruitSelected, setFruitSelected] = useState("");
// const testImg = document.querySelector(".fruitSelected__container--img");
// const dispatch = useDispatch();
// const fruits = useSelector((state) => state.data.fruitsData);
// const sizePic = useSelector((state) => state.general.imgSize);

// `/assets/fruits/${value}.png `
// ? `/assets/fruits/${value}.png`
// : `/assets/fruits/No_image.png`

// {value && (
//   <img
//     src={
//       require(`./../assets/img/fruits/${value}.png`)
//         ? `./../assets/img/fruits/${value}.png`
//         : `./../assets/img/fruits/No_image.png.png`
//     }
//     alt={value}
//   />
// )}

// const img = () => {
//   let test = new Image();
//   const test2 = test.src`/assets/fruits/${value}.png`;
//   if (test2) {
//     console.log("ok");
//   } else {
//     console.log("not found");
//   }
// };
