import HomeContent from "../components/sliderPages/HomeContent";
import Story from "../components/sliderPages/Story";
import Equipage from "../components/sliderPages/Equipage";
import Iles from "../components/sliderPages/Iles";
import Fruits from "../components/sliderPages/Fruits";
import Events from "../components/sliderPages/Events";
import Contact from "../components/sliderPages/Contact";

export const innerContent = (contentSelected) => {
  //test 1

  if (contentSelected === "home") {
    return <HomeContent />;
  }
  if (contentSelected === "story") {
    return <Story />;
  }
  if (contentSelected === "equipage") {
    return <Equipage />;
  }
  if (contentSelected === "iles") {
    return <Iles />;
  }
  if (contentSelected === "fruits") {
    return <Fruits />;
  }
  if (contentSelected === "events") {
    return <Events />;
  }
  if (contentSelected === "contact") {
    return <Contact />;
  }
  // switch (contentSelected) {
  //   case "home":
  //     return <HomeContent />;
  //   case "story":
  //     return <Story />;
  //   case "equipage":
  //     return <Equipage />;
  //   case "iles":
  //     return <Iles />;
  //   case "fruits":
  //     return <Fruits />;
  //   case "events":
  //     return <Events />;
  //   case "contact":
  //     return <Contact />;
  //   default:
  //     return <HomeContent />;
  //   //test 2 voir si probleme
  // }
};

// import axios from "axios";

// export const dataSelector = (dataChoice) => {
//   const data = axios
//     .get(`https://api.api-onepiece.com/${dataChoice}`)
//     .then((res) => res.data);

//   return data;
// };
///////////////////////////////////////////////////////////////////////////////////////
// export default function Card({ index }) {
//     const [afterDelay, setAfterDelay] = useState(false);
//     const DELAY_TIME = 250 // en millisecondes

//     setTimeout(() => setAfterDelay(true), index * DELAY_TIME);

//     return (
//        <>
//            {afterDelay && }
//        </>
//     );
// }
