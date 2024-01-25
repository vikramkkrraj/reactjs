import React, { useState } from 'react'
import { Function } from './Function';

export const UseEffect = () => {
    const [flag,setFlag] = useState(true);

  return (
    <div>
        <button onClick={()=>setFlag(!flag)} >Toggle Function component</button>
        {
            flag ? <Function /> : " "
        }
    </div>
  )
}
