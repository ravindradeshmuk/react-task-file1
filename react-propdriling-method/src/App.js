import React, { createContext } from 'react';
import CompA from './Componant/CompA';

let fristName=createContext()


const App = () => {
 return (
    <>
    <fristName.Provider value="ravindra">
    <CompA/>
    </fristName.Provider>
  
  </>
  )
}

export default App;
export {fristName};