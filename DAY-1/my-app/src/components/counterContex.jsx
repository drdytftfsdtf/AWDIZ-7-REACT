import React,{useState} from 'react'
import { createContext } from 'react';

export const counterContex = createContext();

const providercountercontext = ({childern}) => { // childern -<App/>
    const [counter,setcounter] = useState(0)
    function increment() {
        setcounter(counter + 1)
    }   
      return (
        <MyCounterContext.provider value={{counter,increment}}>
            {childern}
            </MyCounterContext.provider>
        
       
      )

}
export default providercountercontext




