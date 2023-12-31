import React,{useState} from "react";

import "../register/register.css";
import axios from "axios";
import "./register.css"

export default function Register() {
const[username,setUsername]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const [err,setError]=useState({});
const handleSubmit=async(e)=>{
  e.preventDefault();
  setError(false);
  try{
  const res= await axios.post("/auth/register",{
    username,
    email,
    password,
  });
  res.data && window.location.replace("/login");
}catch(err){
setError(true);
}
};
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form onSubmit={handleSubmit} className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." onChange={e=>setUsername(e.target.value)} />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..."onChange={e=>setEmail(e.target.value)} />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." onChange={e=>setPassword(e.target.value)} />
        <button className="registerButton">Register</button>
      </form>
        <button type="submit" className="registerLoginButton">Login</button>
      {err &&  <span style={{color:"red",marginTop:"10px"}}>Something Went Wrong</span>}
    </div>
    )
}