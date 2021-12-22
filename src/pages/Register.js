import React, {useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";

import MasterLayout from "../layouts/MasterLayout";
import {Context as MessageContext} from "../context/MessageContext";
//import { API_getRoles, API_register } from "../api/auth_service";
//import { API_getShops } from "../api/shop_service";
//import RegistrationForm from "../forms/RegistrationForm";
//import Alert from "../components/Alert";
//import Loader from "../components/Loader";

const Register = () => {

  const { state: msgStore, clearMessages, addError, addMessage, addValidationErrors, resetError } = useContext(MessageContext);
  const [roles, setRoles] = useState([]);
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /*useEffect(() => {
    setRolesAndShops();
    resetError();
    setIsLoading(false);
  },[]);

  async function setRolesAndShops()
  {
    await API_getRoles((data,message) =>{
      if(data){
        setRoles(data.data)
      }else{
        addError(message)
      }
    });

    await API_getShops((data,message) =>{
      if(data){
        setShops(data.data)
      }else{
        addError(message)
      }
    });
  }

  //il submit del form
  const registerSubmit = async (e, dataInput) => {
    e.preventDefault();
    clearMessages();
    setIsLoading(true);

    await API_register(dataInput,(data,message) => {
      if(data){
        addMessage('Utente creato con successo!');
      }
      else{
        if(typeof message === 'object'){
          addValidationErrors(message);
        }else{
          addError(message);
        }
      }
    });
    setIsLoading(false);
  };*/

  return (
    
    <NoAuthLayout>
      {isLoading ? <Loader /> : null}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <div className="pt-4 pb-2">
                  <img src="/logo.png" alt="" className="img-fluid" style={{ borderRadius: 50, width:100, height:100, margin:"auto", display:"block" }} />
                </div>
                <h5 className="text-center font-weight-light my-2">Pannello Amministratore Delivery</h5>
                <h4 className="text-center font-weight-light my-2">Registra Nuovo Utente</h4>
              </div>
              <div className="card-body">
                <RegistrationForm 
                  roles = {roles}
                  shops = {shops}
                  onSubmit={ (e, dataInput) => { registerSubmit(e, dataInput) } }
                />
                <div className="">
                  <Alert message={msgStore.message} type='success' />
                  <Alert message={msgStore.errorMessage} type='danger' />
                </div>
              </div>
              <div className="card-footer text-center py-3">
                <Link className="btn btn-info" to="/">Torna al Pannello</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NoAuthLayout>
  );
};

export default Register;
