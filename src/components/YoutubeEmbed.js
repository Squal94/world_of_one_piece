import React from "react";
import { NavLink } from "react-router-dom";

const YoutubeEmbed = ({ pic, link }) => {
  // const [embed, setEmbed] = useState("embedId");
  // useEffect(() => {
  //   setEmbed("embedId");
  // }, []);
  return (
    <div className="video-responsive">
      <NavLink
        to={`https://youtu.be/${link}?feature=shared`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={pic} alt="Youtube capture video" />
      </NavLink>
    </div>
  );
};

// YoutubeEmbed.propTypes = {
//   embedId: PropTypes.string.isRequired,
// };

export default YoutubeEmbed;
