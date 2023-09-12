import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeModal } from "../features/data.slice";

const Modal = ({ data }) => {
  const bgSelected = useSelector((state) => state.data.idSelectedvalue);

  const dispatch = useDispatch();
  console.log(data);

  return (
    <div
      className="modal"
      id="modal"
      onClick={(e) =>
        e.target.id === "modal" ? dispatch(activeModal(false)) : ""
      }
    >
      <div className="modal__container">
        <img
          className="modal__container--bg"
          src={`/assets/bgModal/bg_${bgSelected.toLowerCase()}.jpg`}
          alt=""
        />

        <div className="modal__container__content">
          <div className="modal__container__content--bounty">
            <img src={`/assets/bounty/bounty${bgSelected}.jpg`} alt="bounty" />
            <p>{data.bounty} berrys</p>
          </div>
          <div className="modal__container__content--info">
            <h1>{data.french_name}</h1>
            <p>Age: {data.age}</p>
            <p>Taille: {data.size}</p>
            <p>Position: {data.job}</p>
            <p>Status: {data.status}</p>

            <p className="modal__container__content--info--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              unde illum incidunt deleniti, dignissimos veniam iure ratione
              dolores eligendi eveniet atque error. Quaerat commodi velit
              consequatur optio earum possimus suscipit quod illo error omnis
              perspiciatis, repellat laborum odio perferendis autem!
            </p>
            <button onClick={() => dispatch(activeModal(false))}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
