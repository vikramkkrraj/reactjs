import React, { useEffect, useMemo, useReducer, useState } from "react";

const initialState = [
  {
    id: Date.now(),
    name: "vikram",
    email: "vikram@gmail.com",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((contact) => contact.id !== action.payload);

    default:
      throw new Error();
  }
};

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  

  console.log(state);
  useEffect(() => {}, []);

  const addContact = (e) => {
    e.preventDefault();
    const contact = {
        id: Date.now(),
        name,
        email,
      };
    setName("");
    setEmail("");
    dispatch({ type: "add", payload: contact });
  };  
 
  return (
    <div>
      <form onSubmit={addContact}>
        <label>Email </label>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email </label>
        <input
          type="text"
          value={email}
          placeholder="Email-ID"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Add Contact</button>
      </form>

      {state.map((contact) => (
         <div key={contact.id}>
        <ul >
          <li>{contact.name}</li>
          <li>{contact.email}</li>
          <button
            onClick={() => dispatch({ type: "delete", payload: contact.id })}
          >
            delete
          </button>
        </ul>
         </div>
      ))}
    </div>
  );
};
