import { useContext } from "react"
import{mycountercontext} from"./counter/counterContex";
import { Authcontext } from "./context/authcontext";

function Home() {
    const{counter, increment} =useContext(mycountercontext);
   const{state} =useContext(Authcontext)
   console.log(state,"state")
    return(
        <div>
            <h1>Home page welcome</h1>
            <h2>counter :counter</h2>
            <button onClick={increment}>+</button>

        </div>
    )
  
}    


export default Home;