import { useState } from 'react';
import './App.css'
import { BgColor } from './projects/bgColor/BgColor';
import { PasswordGen } from './projects/passwordGen/PasswordGen';
import { CurrConverter } from './projects/currency/CurrConverter';
import { AppRounter } from './projects/reactRouter/AppRouter';
import { Todos } from './projects/todos/Todos';
import { UseState } from './hooks/useState/UseState';
import { UseEffect } from './hooks/useEffect/UseEffect';
import { UseRef } from './hooks/useRef/UseRef';
import { UseMemo } from './hooks/useMemo/UseMemo';
import { UseCallback } from './hooks/useCallback/UseCallback';
import { UseReducer } from './hooks/useReducer/UseReducer';
import { ReduxToolkitTodos } from './projects/reduxToolkit/ReduxToolkitTodos';
import { Provider } from 'react-redux';
import { store } from './projects/reduxToolkit/store/store';

function App() {
  return (
    <>
      {/* <BgColor /> */}

      {/* <PasswordGen /> */}

      {/* <CurrConverter /> */}

      {/* <h1>Hello There</h1> */}
      {/* <AppRounter /> */}

      {/* <Todos /> */}
      
      <Provider store={store} >
       <ReduxToolkitTodos />
      </Provider>
    </>
  )
}
export default App





// Hooks

// const App = () => {
//   return (
//     <>
//       {/* <UseState /> */}
//       {/* <UseEffect /> */}
//       {/* <UseRef /> */}
//       {/* <UseMemo /> */}
//       {/* <UseCallback/> */}
//       {/* <UseReducer /> */}
//     </>
//   )
// }

// export default App