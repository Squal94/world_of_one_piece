import React from "react";
import { NavLink } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className="homeContainer">
      <h1 className="homeContainer__title">
        World of <img src="/assets/TitreLogo.png" alt="One piece titre" />
      </h1>
      <div className="homeContainer__news">
        <article>
          <h2>News</h2>
          <iframe
            width="360"
            height="210"
            src="https://www.youtube.com/embed/vpD0ngOT4Bw?si=m5apkjZoJ0-WAqLu"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </article>
        <article>
          <h2>Disponible sur :</h2>
          <NavLink to={"https://www.crunchyroll.com/fr"}>
            <img src="/assets/crunchyroll.png" alt="crunchyroll logo" />
          </NavLink>
        </article>
      </div>
      <div className="homeContainer__pitch">
        <h2>Pitch</h2>
        <p>
          Nous sommes à l'ère des pirates. Luffy, un garçon espiègle, rêve de
          devenir le roi des pirates en trouvant le “One Piece”, un fabuleux
          trésor. Seulement, Luffy a avalé un fruit du démon qui l'a transformé
          en homme élastique. Depuis, il est capable de contorsionner son corps
          dans tous les sens, mais il a perdu la faculté de nager. Avec l'aide
          de ses précieux amis, il va devoir affronter de redoutables pirates
          dans des aventures toujours plus rocambolesques.
        </p>
      </div>
    </div>
  );
};

export default HomeContent;
