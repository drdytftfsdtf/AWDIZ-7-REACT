import {createcontext, useReducer} from  'react'

export const Authcontext = createcontext();
+-
function Reducer(state, action){
    switch (action.type){
        case "LOGIN":
            return {...state,user:action.payload}
        case "LOGOUT":
            return {...state,user:null}

        default:
            return state;
    }        

}

const initialstate = {user: null}

const Authcontextcomponent =({childern}) => {

    const[state,dispatch] =useReducer(Reducer,initialstate)

      function Login(data){
        dispatch({type:"LOGIN",payload:data})
   
    }

    function LOGOUT(data){
        dispatch({type:"LOGOUT"})
    }



    return (
        <Authcontext.provider value={ {state,Login,LOGOUT}}>
            {childern}
            </Authcontext.provider>
    )
}

export default Authcontextcomponent



