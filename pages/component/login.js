import React from "react";
import { useState } from "react";
import nhost from "../../api";

const Login = ()=>{

//create a async function to handle the submit
const [email, setEmail] = useState("test@gmail.com");
const [password, setPassword] = useState("Hello");
    const handleSubmit = async (e)=>{
        e.preventDefault();
    }

    return(
        <div>
            <h1>Login</h1>
            <form>
                <label>Email</label>
                
                <input onChange={(e)=>{
                    setEmail(e.target.value);
                }} type="text" name="email" placeholder={email}/>
                <br>
                </br>
                <label>Password</label>
                
                <input onChange={(e)=>{
                    setPassword(e.target.value);
                }} type="password" name="password" placeholder={password}/>
                <br>
                </br>
                <button onClick={(e)=>{
                    handleSubmit(e);
                }} type="submit">Login</button>

            </form>
        </div>
    )
}
export default Login;