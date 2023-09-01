import React from "react";
import Header from "../components/Header";
import bgWano from "../assets/img/BgWano.png";
import { useSelector } from "react-redux";
import HomeContent from "../components/sliderPages/HomeContent";
import Story from "../components/sliderPages/Story";
import Equipage from "../components/sliderPages/Equipage";
// import { dataSelected } from "../features/data.slice";
// import axios from "axios";
// import { dataSelector } from "../utils/functions";

const Home = () => {
  const contentSelected = useSelector((state) => state.general.content);

  const innerContent = (contentSelected) => {
    switch (contentSelected) {
      case "home":
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return <HomeContent />;

      case "story":
        return <Story />;

      case "equipage":
        return <Equipage />;

      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="homeContainer">
      <Header />
      <div className="homeContainer__Content">
        {innerContent(contentSelected)}
      </div>
      <div className="homeContainer--bgHome">
        <img src={bgWano} alt="Pays de Wano kuni" />
      </div>
    </div>
  );
};

export default Home;
