import { useState } from "react"
function Counter(){
    const [Counter,setCounter] = useState(0)

    return(
        <div>
            <h1>Counter -{Counter}</h1>
            <button>+</button>
            <button>-</button>
        </div>

    )

}


export default Counter;
