import  React, { useState, useEffect }  from "react";
import { LOGIN_FORM } from "./forms/login_form/login_form";
import { SIGNUP_FORM } from "./forms/signup_form/signup_form";
// import { PASSWORD_RESET } from "./forms/password_reset_form/password_reset";
import "./login.css"



export const handle_submit = async (e, callback, method, url)=> {
    e.preventDefault();
    let form = new FormData(e.target);
    let obj ={};
    form.forEach((key,value)=>{
        obj[value] = key
    });
    console.log(obj)

    try {
        const response = await fetch(url,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(obj)
            }
        ).then(res => res.text());

        callback(method,response);
        console.log(response);

    }catch (err) {
        console.log(err)
    }
};

export const response_callback = ( method,message ) => {
    method(message)
};



export const LOGIN = ({ dispatch }) => {

    const [state, setState] = useState(null)

    const set_state=(ele)=>{

        switch (ele) {
            case "SIGNUP":
                setState(<SIGNUP_FORM set_state={set_state} dispatch={dispatch}/>)
                break;
            default:
                setState(<LOGIN_FORM set_state={set_state} dispatch={dispatch} />)
                break;
        }
    }

    useEffect(()=>{
        setState(<LOGIN_FORM set_state={set_state} dispatch={dispatch} />)
    },[])
    
    return (
        <>
           {state} 
        </>
    )
}


