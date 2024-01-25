import React, { useEffect, useState } from 'react'

export const Function = () => {
    const [time, setTime] = useState(new Date().toString());
    const [message, setMessage] = useState("Function Component");

    // 
    // useEffect(()=> {
    //     console.log('component mount and updated');
    // },[])

    // to cleanup the function 
    // useEffect(()=> {
    //     const interval = setInterval(showData, 1000);

    //     return ()=> {
    //         console.log('cleanup of intervals');
    //         clearInterval(interval);
    //     }
    // },[time])

    const showData =() =>{
        setTime(new Date().toString());
    }

  return (
    <div>
        <div>{time}</div>
        <button onClick={showData}>click to show data</button>
        <div>{message}</div>
        <button onClick={()=>setMessage('changed function component')}>
            click to change message</button>
    </div>
  )
}
