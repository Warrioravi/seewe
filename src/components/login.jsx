import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";

let Login = () => {
   let history = useHistory()
   let user = useSelector((state) => state.user);
   let [email,setEmail]=useState("");
   let [password,setPassword]=useState("");
  return (
    <>
    {user ? <Redirect to="/home" /> : ""}
      <div className="row">
        <div className="col-4 offset-4">
          <h1 className="mt-4 mb-4">Login</h1>
          <form className="mt-4">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e)=>{
                  setEmail(e.currentTarget.value)
                }}
                value={email}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e)=>{
                  setPassword(e.currentTarget.value)
                }}
                value={password}
              />
            </div>

            <button className="btn btn-primary"onClick={
              (e)=>{
                e.preventDefault();
                auth.signInWithEmailAndPassword(email,password)
                .catch((e)=> {
                  alert(e);
                });
              }
            }>Login</button>
            <br />
            <br />
            <button onClick={()=>{
                history.push("/signup")
            }} className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;