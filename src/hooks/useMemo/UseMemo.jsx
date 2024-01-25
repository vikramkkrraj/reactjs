 // reference of this video from Dipesh Malvia YouTube Channel.
/**
 * 1. Optimization expensive operations(used in factorial function)
 * 2. referential equality. ( used in Functional Component)
 */


import React, { useMemo, useState } from 'react';
import { Fuctional } from './Fuctional';
export const UseMemo = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    const result = useMemo(()=>{
        return factorial(counter);
    },[counter]);
  return (
    <div>
        <h1>Factorial of {counter} : {result}</h1>
        <button onClick={()=>setCounter(prev=>prev+1)}>Increment</button>
        <button onClick={()=>setCounter(prev=>prev-1)}>decrement</button>
        <hr />
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter the Name'/>
        <h2>My name is {name}</h2>
        <hr />
        <Fuctional name ={name} />
       
    </div>
  )
}


export const factorial =(n)=>{
    // let i=0; 
    // while(i<2) i++;
    if(n<0){
        return;
    }
    if(n===0){
        return 1;
    }
    return n * factorial(n-1)
}
