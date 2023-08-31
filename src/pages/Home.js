import React from "react";
import Header from "../components/Header";
import bgWano from "../assets/img/BgWano.png";
// import { useDispatch, useSelector } from "react-redux";
// import { dataSelected } from "../features/data.slice";
// import axios from "axios";
// import { dataSelector } from "../utils/functions";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeContainer--bgHome">
        <img src={bgWano} alt="Pays de Wano kuni" />
      </div>
      <Header />
    </div>
  );
};

export default Home;
