import React from "react";
import Header from "../components/Header";
import bgWano from "../assets/img/BgWano.png";
import { useSelector } from "react-redux";
// import { innerContent } from "../utils/functions";
import HomeContent from "../components/sliderPages/HomeContent";
import Story from "../components/sliderPages/Story";
import Equipage from "../components/sliderPages/Equipage";
import Iles from "../components/sliderPages/Iles";
import Fruits from "../components/sliderPages/Fruits";
import Events from "../components/sliderPages/Events";
import Contact from "../components/sliderPages/Contact";

const Dashboard = () => {
  const contentSelected = useSelector((state) => state.general.content);
  const innerContent = (contentSelected) => {
    switch (contentSelected) {
      case "home":
        return <HomeContent />;
      case "story":
        return <Story />;
      case "equipage":
        return <Equipage />;
      case "iles":
        return <Iles />;
      case "fruits":
        return <Fruits />;
      case "events":
        return <Events />;
      case "contact":
        return <Contact />;
      default:
        return "";
    }
  };
  // useEffect(() => {}, []);

  return (
    <div className="dashboardContainer">
      <Header />
      <div className="dashboardContainer__Content">
        {innerContent(contentSelected)}
      </div>
      <div className="dashboardContainer--bgHome">
        <img src={bgWano} alt="Pays de Wano kuni" />
      </div>
    </div>
  );
};

export default Dashboard;
