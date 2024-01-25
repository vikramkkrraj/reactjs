/**
 * 1.Memoize the function (useCallback) vs Memoize the value(useMemo)
 * 2. Referential equality for functions
 */


import React, { useEffect, useState,useMemo, useCallback } from 'react'
// import { Function } from './../useEffect/Function';

export const UseCallback = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    const result = useMemo(()=>{
        return factorial(counter);
    },[counter]);

    // function displayName() {
    //     return name ;
    // }
    // useCallBack to avoid rerendering in Functional component due to displayName

    const displayName = useCallback((greeting)=> {
        return greeting + name;
    },[name]);

  return (
    <div>
         <div>
        <h1>Factorial of {counter} : {result}</h1>
        <button onClick={()=>setCounter(prev=>prev+1)}>Increment</button>
        <button onClick={()=>setCounter(prev=>prev-1)}>decrement</button>
        <hr />
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter the Name'/>
        <h2>My name is {name}</h2>
        <hr />
        <Functional displayName ={displayName} />
       
    </div>
    </div>
  )
}

const Functional =({displayName}) => {
    const [value, setValue] = useState();
    useEffect(()=> {
        setValue(displayName("Hello "));
        console.log('component rerender')
    },[displayName])

    return (
        <h1>My name is {value} </h1>
    )

}


const factorial =(n)=>{
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

