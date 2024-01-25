import React, { useReducer, useState } from 'react'
import { Contact } from './Contact';

const initialState = 0;
const reducer = (state, action) =>{
    switch(action.type){
        case 'increment' :
            return state + 1;
        case 'decrement' :
            return state -1;
        default :
            return  new Error('something is wrong');
    }
}
export const UseReducer = () => {
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // <div>
    //     <h1>useReducer Hook</h1>
    //     <h1>{state}</h1>

    //     <button onClick={()=> dispatch({type : 'increment'})}>increment</button>
    //     <button onClick={()=> dispatch({type : 'decrement'})}>decrement</button>
        
    // </div>
    <Contact />
  )
}
