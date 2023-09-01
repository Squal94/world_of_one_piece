import HomeContent from "../components/sliderPages/HomeContent";
import Story from "../components/sliderPages/Story";
import Equipage from "../components/sliderPages/Equipage";
import Iles from "../components/sliderPages/Iles";
import Fruits from "../components/sliderPages/Fruits";
import Events from "../components/sliderPages/Events";
import Contact from "../components/sliderPages/Contact";
// import axios from "axios";

// export const dataSelector = (dataChoice) => {
//   const data = axios
//     .get(`https://api.api-onepiece.com/${dataChoice}`)
//     .then((res) => res.data);

//   return data;
// };

export const innerContent = (contentSelected) => {
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
      return <HomeContent />;
  }
};

export const innerAnimate = () => {
  console.log(test);
};
