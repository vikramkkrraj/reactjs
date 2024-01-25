import React, { useState } from 'react'

export const UseState = () => {

    // let name = 'vikram';
    // const changeName =()=> {
    //     console.log('clicked ')
    //   return  name = 'kumar';
    // }
    // NOTE : if we try to change the name variable , 
    // we cann't (because componet is not re-rendering)
    // here comes use of hooks useState 

    // console.log(useState());
    const [name , setName] = useState('vikram');  // string
    const [count, setCount] = useState(0);      // number
    const [flag, setFlag] = useState(false);      // boolean
    const [names, setNames] = useState([]);     //array

    // string(name) and boolean(flag)
    const changeName = () => {
        console.log('clicked')
        setName('Kumar');
        setFlag(!flag);
    }


    // Numbers(count)
    // const inc = () => {
    //     setCount(count+1);
    //     setCount(count+1);
    //     setCount(count+1);
    // }
    const inc =() => {
        setCount(prevCount => prevCount +1);
        setCount(prevCount => prevCount +1);
    }
    const dec = () => {
        setCount(prevCount => prevCount -1);
    }

    // array(names)
    const addName = (e) => {
       
        e.preventDefault();
        // setNames(names.push({id:name.length , name : name})); // bad practice(never use push method)
        // setNames({ name:name})  // bad practice

        setNames( [...names, {id:names.length, name:name}]);
        setName('');

    }

    // another use of useState 
    // const [steps,setSteps] = useState(()=> {
    //     console.log('clicked step');
    //     return 0;
    // })
    // NOTE: on changing in step state componet will not re-render
    // can use this for heavy function(fx) inside useState(fx) and 
    // this time state will re-render. 
    function fx(){
        console.log('clicked step inside useState function');
        return 0;
    }
    const [steps,setSteps] = useState(fx());

  return (
    <div>
        <h1>Hi! { flag ? name : '' }</h1>
        <button onClick={changeName}>Click Me</button>
        <hr />
        <button onClick={inc}>+</button>
        <h1>{count}</h1>
        <button onClick={dec}>-</button>
        <hr />
        <form onClick={addName} >
            <input type="text"
                placeholder='add name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
             />
             <button>Submit</button>
        </form>
        <hr />
        <ul>
            {names?.map((item) =>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        <hr />
        <h1>{steps}</h1>
        <button onClick={()=>setSteps(prev=>prev+1)}>steps</button>
    </div>
  )
}
