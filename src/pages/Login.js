import React, { useState, useContext } from "react";

import { Context as AuthContext } from "../context/AuthContext";
import SimpleLayout from "../layouts/SimpleLayout";
import LoginForm from "../forms/LoginForm";
import Loader from "../components/Loader";
import AuthService, { API_Login } from "../api/AuthService";

console.log('file_Login.js');

const Login = () =>{
  console.log('Login.js');
  const [ loading, setLoading ] = useState( false );
  const { setAuth } = useContext( AuthContext );

  const tryLogin = async ( dataInput ) => {
    setLoading( true );
    await API_Login( dataInput, (data, message ) => {
      if(data){
        setAuth(data.token, data.username);
      }
      setLoading(false);
    });
  }

  return (
    <SimpleLayout>
      { loading ? <Loader /> : null }
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <div className="pt-4 pb-2">
                  <img src="/logo.png" alt="" className="img-fluid" style={{ borderRadius: 50, width:100, height:100, margin:"auto", display:"block" }} />
                </div>
                <h5 className="text-center font-weight-light my-2">Pannello Amministratore Delivery</h5>
                <h4 className="text-center font-weight-light my-2">Login</h4>
              </div>
              <div className="card-body">
                <LoginForm onSubmitHandler={ ( dataInput ) => tryLogin( dataInput )}  />
                <div className="">            
                  
                </div>
              </div>              
              <div className="card-footer text-center py-3">
                <div className="small">                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
}

export default Login;