import React from "react";
import { NavLink } from "react-router-dom";

const Events = () => {
  return (
    <div className="eventsContainer">
      <div className="eventsContainer__main">
        <h2>Upcoming</h2>
        <h4>OUR EVENT</h4>
        <div className="event-grid">
          <div className="event-1 event-left">
            <div className="date">
              <div className="date-content">
                <h6>13 - 14 - 15</h6>
                <span>Octobre</span>
              </div>
            </div>
            <div className="address">
              <h3>Japan Evasion</h3>
              <p>10:00pm - 18:00am</p>
              <h5>
                <NavLink
                  to={"https://www.japanevasion.fr/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TICKETS
                </NavLink>{" "}
              </h5>
            </div>
          </div>
          <div className="event-2 event-left">
            <div className="date">
              <div className="date-content">
                <h6>11 au 14</h6>
                <span>Juillet</span>
              </div>
            </div>
            <div className="address">
              <h3>Japan Expo</h3>
              <p>
                <i className="far fa-clock"></i>10:00pm - 20:00am
              </p>
              <h5>
                <NavLink
                  to={"https://www.japan-expo-paris.com/fr/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BUY TICKETS
                </NavLink>
              </h5>
            </div>
          </div>
          <div className="event-3">
            <div className="address">
              <div className="date">
                <div className="date-content">
                  <h6>29</h6>
                  <span>Septembre</span>
                </div>
              </div>
              <h3>la Nuit One Piece 2023 Sortie du Tome 105 </h3>
              <p>
                <i className="far fa-clock"></i>10:00pm - 18:00am
              </p>
              <h5>
                <NavLink
                  to={
                    "https://www.nuitonepiece.com/rendez-vous-le-29-septembre-prochain-pour-la-nuit-one-piece-2023/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BUY TICKETS
                </NavLink>
              </h5>
            </div>
          </div>
          <div className="event-4">
            <div className="address">
              <div className="date">
                <div className="title">
                  <h4>One piece sur</h4>
                  <img src="/assets/pngegg(5).png" alt="Netflix logo" />
                </div>
              </div>
              <h5>
                <NavLink
                  to={"https://www.netflix.com/fr/title/80217863"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visionner
                </NavLink>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
