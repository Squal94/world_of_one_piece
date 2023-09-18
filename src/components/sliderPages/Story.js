import React from "react";
import { NavLink } from "react-router-dom";
import YoutubeEmbed from "../YoutubeEmbed";

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
        <article className="storyContainer__content--article">
          <img src="/assets/avt_eiichiro-oda_5427.jpg" alt="Eiichirō Oda" />
          <div className="storyContainer__content--article--text">
            <h2>
              <NavLink to={"https://fr.wikipedia.org/wiki/Eiichir%C5%8D_Oda"}>
                Eiichirō Oda
              </NavLink>
            </h2>
            <hr />
            <p>
              Eiichirō Oda (尾田 栄一郎, Oda Eiichirō?), né le 1er janvier 1975
              à Kumamoto dans la préfecture de Kumamoto, au Japon, est un
              mangaka. <br />
              Il est connu pour avoir écrit le manga le plus vendu au début du
              XXIe siècle au Japon et dans le reste du monde : One Piece. Ce
              manga est entré dans le Livre Guinness des records pour être
              devenu le manga ayant le tirage le plus élevé du monde en décembre
              2014. <br />
              Mais Oda ne connait véritablement le succès qu'après la
              publication du premier chapitre de son œuvre phare, One Piece,
              dans le numéro 34 du Weekly Shōnen Jump de 1997. Le manga gagne
              alors très vite en popularité et devient une référence
              incontournable du genre shōnen au même titre que Dragon Ball
              d'Akira Toriyama. Il est l'un des rares mangakas à avoir dépassé
              la barre des 100 millions de mangas vendus pour une œuvre au Japon
              et chaque nouveau tome de la série se vend à plus de trois
              millions d'exemplaires.
            </p>
          </div>
        </article>
        <article className="storyContainer__content--article">
          <div className="storyContainer__content--article--text">
            <h2>
              <NavLink to={"https://fr.wikipedia.org/wiki/One_Piece"}>
                One piece
              </NavLink>
            </h2>
            <hr />
            <p>
              One Piece (ワンピース, Wan Pīsu?) est une série de shōnen mangas
              créée par Eiichirō Oda. Elle est prépubliée depuis le 22 juillet
              1997 dans le magazine hebdomadaire Weekly Shōnen Jump, puis
              regroupée en tankōbon aux éditions Shūeisha depuis le 24 décembre
              1997. 106 tomes sont commercialisés au Japon en juillet 2023.
              <br />
              La version française est publiée en volumes reliés depuis le 1er
              septembre 2000 par Glénat, et 104 volumes sont commercialisés en
              avril 2023. Depuis le 26 septembre 2021, la version française est
              prépubliée simultanément avec la version japonaise sur les
              plates-formes en ligne Manga Plus et Glénat Manga Max. <br />
              L'histoire suit les aventures de Monkey D. Luffy, un garçon dont
              le corps a acquis les propriétés du caoutchouc après avoir mangé
              par inadvertance un fruit du démon. Avec son équipage de pirates,
              appelé l'équipage de Chapeau de paille, Luffy explore Grand Line à
              la recherche du trésor ultime connu sous le nom de « One Piece »
              afin de devenir le prochain roi des pirates.
            </p>
          </div>
          <img src="/assets/onePiece.jpg" alt="Eiichirō Oda" />
        </article>
      </div>
      <div className="storyContainer__best">
        <h2>Best moments of Arc of Wano</h2>
        <div className="storyContainer__best--youtube">
          <YoutubeEmbed
            embedId={"mjSCqjrf0gE?si=Obs_GgseWR6bq11P"}
            size="250"
          />
          <YoutubeEmbed
            embedId={"SxaUgsSZva8?si=yBA5c4OCfLsMwaa_"}
            size="250"
          />
          <YoutubeEmbed
            embedId={"XuWuin5UEBk?si=jYIUZg39gw8N8M-3"}
            size="250"
          />
          <YoutubeEmbed
            embedId={"G2zkKqPo1lw?si=HV2Pztwjlp-R9p88"}
            size="250"
          />
          <YoutubeEmbed
            embedId={"cjjYAbMtWhk?si=jwtVau1pkCX3yrtQ"}
            size="250"
          />
          <YoutubeEmbed
            embedId={"23eDwEgSu-k?si=A_eJXufBYajwIO5L"}
            size="250"
          />
          <YoutubeEmbed
            embedId={"AfZmNBonIeI?si=V0PiwIpB-59fb_wC"}
            size="250"
          />
          <YoutubeEmbed
            embedId={"M3Wy9umXDcE?si=HDt8TqPSX3xeze5G"}
            size="250"
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
