import React, { useState, useContext } from "react";
import {Context as AuthContext} from "../context/AuthContext";

console.log('file_LoginForm.js');

const LoginForm = ({ onSubmitHandler }) => {
  console.log('LoginForm.js');
  const [dataInput, setDataInput] = useState({ email: "", password: "", remember: "" });
  //const { clearMessages } = useContext(AuthContext);

  const inputHandler = (e) => {
    e.persist();
    //clearMessages();
    setDataInput({ ...dataInput, [e.target.id]: e.target.value });
  };

  return (
    <form onSubmit={ ( e ) => { e.preventDefault(); onSubmitHandler( dataInput ) } }>

      <div className="row mb-3">
        <div className="col-md-12">
          <input className="form-control" id="email" type="email" value={ dataInput.email } onChange={ inputHandler } placeholder="email" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-12">
          <input className="form-control" id="password" type="password" value={ dataInput.password } onChange={ inputHandler } placeholder="password" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-12">
          <div className="form-check mb-1">
            <input className="form-check-input" id="remember" type="checkbox" value={ dataInput.remember } onChange={ inputHandler } />
            <label className="form-check-label" htmlFor="inputRememberPassword">ricordami</label>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between mt-0 mb-0">
        <button disabled={ dataInput.email === "" || dataInput.password === "" } type="submit" className="btn btn-primary w-100" >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
