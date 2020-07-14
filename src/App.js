import  React, { useEffect, useReducer }  from "react";
import { LOGIN } from "./login_page/login";
import "./app.css";

const AUTHENTICATED = "AUTHENTICATED";
const LOGIN_PAGE = "LOGIN";

const RESPOSE =()=>{
    return (
        <h1>
            AUTHENTICATION IS A BLAST!
        </h1>
    )
}

const CHAT_REDUCER =(state, action)=> {
    switch (action.type) {
        case AUTHENTICATED:
            return <RESPOSE />;  
        case LOGIN_PAGE:
            return <LOGIN dispatch={action.prop} />;
        default:
            return null;
    }
}


export const App=()=>{
    const [state, dispatch] = useReducer(CHAT_REDUCER, null );

    useEffect(()=>{
        dispatch({type: "LOGIN", prop: dispatch})
    },[])
    return (
        <div className="app_root" >
            {state}
        </div>
    )
}