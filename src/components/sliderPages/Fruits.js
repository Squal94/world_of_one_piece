import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fruitsImport } from "../../features/data.slice";
import FruitAffichage from "../FruitAffichage";

const Fruits = () => {
  const [fruitSelected, setFruitSelected] = useState("");
  const dispatch = useDispatch();
  const fruits = useSelector((state) => state.data.fruitsData);

  useEffect(() => {
    axios
      .get("https://api.api-onepiece.com/fruits")
      .then((res) => dispatch(fruitsImport(res.data)));
  }, [dispatch]);

  return (
    <div className="fruitsContainer">
      <div className="fruitsContainer--head">
        <h1>Fruits</h1>
        <p>
          Les Fruits du Démon (悪魔の実, Akuma no Mi) sont des fruits
          légendaires, qui donnent diverses aptitudes et capacités spéciales à
          ceux qui les ont mangés, mais qui en retour les condamnent à ne plus
          jamais pouvoir nager. La capacité acquise dépend du fruit et de son
          type. Certains fruits n'apparaissent que dans le manga et d'autres
          uniquement dans l'anime, créant ainsi une authenticité propre à
          chacun.
        </p>
        <h2>Sélectionne ton fruit</h2>
        <div className="fruitsContainer--select">
          <select
            name="fruit"
            id="fruits"
            onChange={(e) => setFruitSelected(e.target.value)}
          >
            <option value="">--Please choose an option--</option>
            {fruits.slice(0, 10).map((fruit) => {
              return (
                <option key={`${fruit.id}`} value={`${fruit.roman_name}`}>
                  {fruit.roman_name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="fruitsContainer--affichage">
          <FruitAffichage value={fruitSelected} />
        </div>
      </div>
    </div>
  );
};

export default Fruits;
