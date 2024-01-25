import React from 'react'
import { UseMemo } from './UseMemo';

export const Fuctional = ({name}) => {
    console.log("functional component");
  return (
    <div>
        <h1>My Name is {name}</h1>
    </div>
  )
}
// NOTE : by change in the counter state which is inside in the UseMemo
// component Here Functional componenet is also rendering
// because(in UseMemo component Functional component is used and 'name'
//  is used as prop and whenever the UseMomo rendering due to counter
//  'name' object is assigment( a === obj and b === obj then a is not 
//   equal to a (both having the refernce of obj with different name) ) on every rendering to here in Function
//   component also rendering happening )





// To Avoit this kind to rendering useMemo hoook
// NOTE : initially avoid using useMemo after completing the code
//  check whether it will help to optimization of code and use there.

// export const Fuctional = React.memo(({name}) => {
//     console.log('Functional Component');
//   return (
//     <div>
//         <h2>{name}</h2>
//     </div>
//   )
// });
