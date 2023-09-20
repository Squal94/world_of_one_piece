import React, { useCallback, useRef } from "react";

const Contact = () => {
  const nameInputElement = useRef();
  const emailInputElement = useRef();
  const textAreaInputElement = useRef();

  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      const data = {
        name: nameInputElement.current?.value,
        email: emailInputElement.current?.value,
        textArea: textAreaInputElement.current?.value,
      };
      // Possibilité de se connecter à EmailJs ou de faire un dispatch dans le store
      console.log(data);
    },
    []
  );
  return (
    <div className="contact" id="contact">
      <h1 className="contact--title">Signup</h1>
      <form className="conatct__form" onSubmit={formHandler()}>
        <div className="conatct__form--name">
          <label htmlFor="name">Name</label>
          <input
            ref={nameInputElement}
            id="name"
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="conatct__form--email">
          <label htmlFor="email">Email</label>
          <input
            ref={emailInputElement}
            id="email"
            placeholder="Email"
            type="email"
          />
        </div>

        <div className="conatct__form--area">
          <label htmlFor="textArea">Message.........</label>
          <textarea
            ref={textAreaInputElement}
            name="textArea"
            id="textArea"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button className="conatct__form--submit" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;

// Contact V1 ---------------------------------------------------------------

// const Contact = () => {
//   const refContainer = useRef(null);
//   const divContainer = useRef(null);

//   const handleSubmit = (e) => {
//     console.log(refContainer.current.value);
//     console.log(divContainer.current);
//   };
//   return (
//     <div className="contactContainer " id="contact">
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input type="text" ref={refContainer} />
//         </div>
//         <div ref={divContainer}> useRef is Awesome!</div>
//       </form>
//     </div>
//   );
// };

// export default Contact;

// Contact V2 with bootstrap ---------------------------------------------------------------

// import { useRef, useCallback } from "react";

// import Card from "./components/card";

// export default function App() {
//   console.log("### Refreshing");

//   const fullNameInputElement = useRef();
//   const emailInputElement = useRef();
//   const passwordInputElement = useRef();
//   const passwordConfirmationInputElement = useRef();

//   const formHandler = useCallback(
//     () => (event) => {
//       event.preventDefault();

//       const data = {
//         fullName: fullNameInputElement.current?.value,
//         email: emailInputElement.current?.value,
//         password: passwordInputElement.current?.value,
//         passwordConfirmation: passwordConfirmationInputElement.current?.value
//       };

//       console.log(data);
//     },
//     []
//   );

//   return (
//     <div className="flex h-screen bg-gray-500 w-screen items-center justify-center">
//       <Card>
//         <h1 className="text-3xl">Signup</h1>
//         <form className="mt-4" onSubmit={formHandler()}>
//           <div className="flex flex-col mb-4">
//             <label
//               className="text-gray-700 text-sm font-bold mb-2"
//               htmlFor="full_name"
//             >
//               Full name
//             </label>
//             <input
//               ref={fullNameInputElement}
//               id="full_name"
//               placeholder="Full name"
//               type="text"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="flex flex-col mb-4">
//             <label
//               className="text-gray-700 text-sm font-bold mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               ref={emailInputElement}
//               id="email"
//               placeholder="Email"
//               type="email"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="flex flex-col mb-4">
//             <label
//               className="text-gray-700 text-sm font-bold mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               ref={passwordInputElement}
//               id="password"
//               placeholder="Password"
//               type="password"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="flex flex-col mb-4">
//             <label
//               className="text-gray-700 text-sm font-bold mb-2"
//               htmlFor="password_confirmation"
//             >
//               Password Confirmation
//             </label>
//             <input
//               ref={passwordConfirmationInputElement}
//               id="password_confirmation"
//               placeholder="Password Confirmation"
//               type="password"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Submit
//           </button>
//         </form>
//       </Card>
//     </div>
//   );
// }
