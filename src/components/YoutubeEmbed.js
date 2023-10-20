import React from "react";
import { NavLink } from "react-router-dom";

const YoutubeEmbed = ({ pic, link }) => {
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

export default YoutubeEmbed;
