import React, { useState, useEffect }  from "react";
import { handle_submit, response_callback } from "../../login";


const signup_url = "http://localhost:5000/app/user/signup"

export const SIGNUP_FORM = ({ dispatch,set_state }) =>{
    let [name, setName] = useState(null);
    let [email, setEmail] = useState(null);
    let [password, setPassword] = useState(null);
    let [view_password, set_view_password] = useState("view");
    let [password_type, setPassword_type] = useState("password")
    let [signup_response, set_signup_response] = useState(null);

    const mask_password =()=> {
        password_type === "password" ? setPassword_type("text") : setPassword_type("password");
        view_password === "view" ? set_view_password("hide") : set_view_password("view");
    }

    return (

        <form id="login-form" onSubmit={ e => handle_submit( e , response_callback, set_signup_response, signup_url) } >
            <p className="form-title">sign_up!</p>

            <span className="form-span">
                <label className="username" htmlFor="name" ></label>
                <input className="form-input" placeholder="name" type="text" name={"name"} id="name" onChange={(e)=>setName(e.target.value)} required autoFocus/>
            </span>

            <span className="form-span" >
                <label className="username" htmlFor="email" ></label>
                <input className="form-input" placeholder="email" type="email" name={"email"} id="email" onChange={(e)=>setEmail(e.target.value)} required />
            </span>

            <span className="form-span" >
                <label htmlFor="password" ></label>
                <input className="form-input" placeholder="password" type={password_type} name={"password"} id="password" onChange={(e)=>setPassword(e.target.value)} required/>
                <p className="show-password" onClick={()=> mask_password()}>{view_password}</p>
            </span>

            <span className="btn-container">
                <button className="login btn-general" type="submit"  >sign_up</button>
            </span>            
            <p>{signup_response}</p>
            <button className="btn-general" type="text" onClick={()=>{set_state()}} >sign-up</button>
        </form>

    );
}