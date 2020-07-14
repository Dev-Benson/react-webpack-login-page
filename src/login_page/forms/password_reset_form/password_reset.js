

import React, { useState, useEffect }  from "react";
import { handle_submit, response_callback } from "../../login";




export const PASSWORD_RESET =()=> {
    let [email, setEmail] = useState(null);
    let [password, setPassword] = useState(null);
    let [password_type, setPassword_type] = useState("password")
    let [reset_response, set_reset_response] = useState(null);
    const mask_password =()=> {
        password_type === "password" ? setPassword_type("text") : setPassword_type("password")
    }

    return (

        <form id="login-form" onSubmit={ e => handle_submit( e , response_callback, set_signup_response, signup_url) } >
            <p className="form-title">reset password</p>

            <label className="username" htmlFor="email" >email
                <input className="welcome-input" type="email" name={"email"} id="email" onChange={(e)=>setEmail(e.target.value)} required />
            </label>

            <label htmlFor="password" >new password
                <input className="welcome-input" type={password_type} name={"password"} id="password" onChange={(e)=>setPassword(e.target.value)} required/>
                <p onClick={()=> mask_password()}>show</p>
            </label>

            <label htmlFor="password" >retype password
                <input className="welcome-input" type={password_type} name={"password"} id="password" onChange={(e)=>setPassword(e.target.value)} required/>
                <p onClick={()=> mask_password()}>show</p>
            </label>

            <span className="btn-container">
                <button className="login btn-general" type="submit"  >sign_up</button>
            </span>
            
            <p>{reset_response}</p>
        </form>

    );
}