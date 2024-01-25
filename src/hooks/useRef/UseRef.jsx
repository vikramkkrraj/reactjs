import React, { useEffect, useRef } from "react";
import { useState } from "react";

export const UseRef = () => {
  /**
   * 1. DOM Reference
   * 2. useRef for storing the previous state
   * 3. hold the mutable value prevent re-render of component
   */

  const [name, setName] = useState("");
  const inputEl = useRef();
  //   console.log(inputEl.current);
  function reset() {
    setName("");
    inputEl.current.focus();
  }

  //   to store the previous value
  const [counter,setCounter] = useState(0);
  const previousCounter = useRef(0);

  useEffect(()=>{
    previousCounter.current = counter;
  },[counter])

  return (
    <div>
      <input
        ref={inputEl}
        type="text"
        value={name}
        name="name"
        autoComplete="off"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={reset}>Reset</button>
      <h1>My name is {name} </h1>
      <hr />
      <div>
        <h1>Counter : {counter}</h1>
        {
            typeof previousCounter.current !== "undefined" && 
            (<h2>Previoust Counter : {previousCounter.current} </h2>)
        }

       <button onClick={(e)=>setCounter(Math.ceil(Math.random()*100))}
        >Click Me!</button>
      
      </div>
    </div>
    
  );
};
