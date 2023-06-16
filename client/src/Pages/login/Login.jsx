// import React from "react";
// import { useRef } from "react";
// import { useContext } from "react";
// import axios from "axios";
// import "../login/login.css"
// import { Context } from "../../context/Context";
// export default function Login() {
 
 
//   const userRef=useRef("/login");
//  const passwordRef=userRef("/login");
 
// const {user,dispatch,isFetching}=useContext(Context)

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     dispatch({type:"LOGIN_START"});
//     try{
// const res=axios.post("/auth/login",{
//   username:userRef.current.value,
//   password:passwordRef.current.value
// })
// dispatch({type:"LOGIN_SUCCESS",payload:res.data});
//     }catch(err){
// dispatch({type:"LOGIN_FAILURE"})
//     }
//   };
//   console.log(isFetching);

//     return (
//       <div className="login">
//         <span className="loginTitle">Login</span>
//         <form className="loginForm" onSubmit={handleSubmit}>
//           <label>Email</label>
//           <input className="loginInput" type="text" placeholder="Enter your email..."
//           ref={userRef} />
//           <label>Password</label>
//           <input className="loginInput" type="password" placeholder="Enter your password..." />
//           <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
//         </form>
//           <button className="loginRegisterButton">Register</button>
//       </div>
//     );
//   }
import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import axios from "axios";
import "../login/login.css";
import { Context } from "../../context/Context";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();

  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(isFetching);

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}
