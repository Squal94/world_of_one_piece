import React, { useCallback, useRef } from "react";

const Contact = () => {
  const nameInputElement = useRef();
  const emailInputElement = useRef();
  const textAreaInputElement = useRef();
  const formRef = useRef();

  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      // const data = {
      //   name: nameInputElement.current?.value,
      //   email: emailInputElement.current?.value,
      //   textArea: textAreaInputElement.current?.value,
      // };
      // // Possibilité de se connecter à EmailJs ou de faire un dispatch dans le store
      // console.log(data);

      formRef.current.reset();
    },
    []
  );
  return (
    <div className="contact" id="contact">
      <h1 className="contact--title">Signup</h1>
      <div className="contact__form">
        <img
          className="contact__form--left"
          src="assets/contactLeft.png"
          alt="Nami"
        />
        <form
          className="contact__form--center"
          ref={formRef}
          onSubmit={formHandler()}
        >
          <img
            className="contact__form--center--img1"
            src="assets/goodies1.png"
            alt="luffy face 1"
          />
          <img
            className="contact__form--center--img2"
            src="assets/goodies2.png"
            alt="luffy face 2"
          />
          <img
            className="contact__form--center--img3"
            src="assets/goodies3.png"
            alt="luffy face 3"
          />

          <div className="contact__form--name labelForm">
            <label htmlFor="name">
              <h2>Name</h2>
            </label>
            <input
              ref={nameInputElement}
              id="name"
              placeholder="Name"
              type="text"
            />
          </div>
          <div className="contact__form--email labelForm">
            <label htmlFor="email">
              <h2>Email</h2>
            </label>
            <input
              ref={emailInputElement}
              id="email"
              placeholder="Email"
              type="email"
            />
          </div>

          <div className="contact__form--area labelForm">
            <label htmlFor="textArea">
              <h2>Message :</h2>
            </label>
            <textarea
              ref={textAreaInputElement}
              placeholder="Votre message......."
              name="textArea"
              id="textArea"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="contact__form--submit">
            <button type="submit">Envoyer</button>
          </div>
        </form>
        <img
          className="contact__form--right"
          src="assets/contactRight.png"
          alt="Robin"
        />
      </div>
    </div>
  );
};

export default Contact;
