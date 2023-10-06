import React, { useRef } from "react";
import Header from "../components/Header";
import bgWano from "../assets/img/BgWano.png";
import { useSelector } from "react-redux";
import { innerContent } from "../utils/functions";

const Dashboard = () => {
  const contentSelected = useSelector((state) => state.general.content);
  let content = useRef(innerContent(contentSelected));

  return (
    <div className="dashboardContainer">
      <Header />
      <div className="dashboardContainer__Content">{content && content}</div>
      <div className="dashboardContainer--bgHome">
        <img src={bgWano} alt="Pays de Wano kuni" />
      </div>
    </div>
  );
};

export default Dashboard;
