import React from "react";
import { useDispatch } from "react-redux";
import { activeModal } from "../features/data.slice";

const Modal = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="modal">
      <div className="modal_content">
        <h1>{data.french_name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere unde
          illum incidunt deleniti, dignissimos veniam iure ratione dolores
          eligendi eveniet atque error. Quaerat commodi velit consequatur optio
          earum possimus suscipit quod illo error omnis perspiciatis, repellat
          laborum odio perferendis autem!
        </p>
        <button onClick={() => dispatch(activeModal(false))}>Fermer</button>
      </div>
    </div>
  );
};

export default Modal;
