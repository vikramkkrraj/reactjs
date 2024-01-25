import React, { useState } from 'react'

export const BgColor = () => {
    const[color,setColor] = useState('');
  return (
    <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12">
            <div className="fixed flex-wrap justify-center gap-3">
                <button  
                    onClick={()=>setColor('red')}
                    style={{backgroundColor :'red'}}
                    className="outline-none px-4 rounded-full text-white shadow-lg"
                >red</button>
            </div>
            <div>
                <button onClick={()=>setColor('green')}
                style={{backgroundColor:'green'}}
                className="outline-none px-4 rounded-full text-white shadow-lg"
                >green</button>
            </div>
            <div>
                <button
                style={{backgroundColor:'blue'}}
                onClick={()=>setColor('blue')}
                className="outline-none px-4 rounded-full text-white shadow-lg"
                >blue</button>
            </div>
        </div>
    </div>
  )
}
