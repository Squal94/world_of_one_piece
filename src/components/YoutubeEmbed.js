import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, size }) => {
  const [embed, setEmbed] = useState(embedId);
  useEffect(() => {
    setEmbed(embedId);
  }, [embedId]);
  return (
    <div className="video-responsive">
      {embed && (
        <iframe
          width={size}
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      )}
    </div>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
