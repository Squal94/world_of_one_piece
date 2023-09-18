import React from "react";

const Story = () => {
  return (
    <div className="storyContainer">
      <img
        className="storyContainer--title"
        src="/assets/TitreLogo.png"
        alt="One piece logo"
      />
      <h1>Story</h1>
      <div className="storyContainer__content">
        <article className="storyContainer__content--auteur">
          <img src="" alt="" />
          <div className="storyContainer__content--auteur--text">
            <h2>Eiichirō Oda</h2>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Story;
