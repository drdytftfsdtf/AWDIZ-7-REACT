import { useState } from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

function login() {

    const router = useNavigate()

    const[userdata, setuserdata] =useState({email: "", password:""})

    console.log(userdata,"userdata")

    function handlechange(event){

        setuserdata({...userdata,[event.target.name]:event.target.value})
    }

    async function handleSumbit(event){
        event.preventDefault();
        
    }
}