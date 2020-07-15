import React, { useState, useEffect }  from "react";
import { handle_submit, response_callback } from "../../login";



const login_url = "http://localhost:5000/app/user/login"


export const LOGIN_FORM = ({ dispatch, set_state }) =>{

    let [email, setEmail] = useState(null);
    let [password_type, setPassword_type] = useState("password");
    let [view_password, set_view_password] = useState("view");
    let [password, setPassword] = useState(null);
    let [login_response, set_login_response] = useState(null);

    const mask_password =()=> {
        password_type === "password" ? setPassword_type("text") : setPassword_type("password");
        view_password === "view" ? set_view_password("hide") : set_view_password("view");
    }

    return (

        <form id="login-form" onSubmit={ e => handle_submit( e , response_callback, set_login_response, login_url) } >
            <p className="form-title">Welcome!</p>
            <span className="form-span" >
                <label className="username" htmlFor="email" ></label>
                <input placeholder="email" className="form-input" type="email" name={"email"} id="email" onChange={(e)=>setEmail(e.target.value)} required autoFocus/>
            </span>

            <span className="form-span">
                <label htmlFor="password" ></label>
                <input className="form-input" placeholder="password" type={password_type} name={"password"} id="password" onChange={(e)=>setPassword(e.target.value)} required/>
                <p className="show-password" onClick={()=> mask_password()}>{view_password}</p>
            </span>

            <span className="btn-container">
                <button className="login btn-general" type="submit"  >login</button>
                <button className="sign-up btn-general" onClick={()=>{set_state("SIGNUP")}} >sign-up</button>
            </span>
            <p className="response" >{login_response}</p>
        </form>

    );
}