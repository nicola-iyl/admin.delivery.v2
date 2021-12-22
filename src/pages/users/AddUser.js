import React, { useState, useEffect, useContext } from "react";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import UserForm from "../../forms/UserForm";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_GetRoles, API_GetShops, API_Register } from "../../api/AuthService";
import Loader from "../../components/Loader";

const AddUser = () => {

  const [ roles, setRoles ] = useState([]);
  const [ shops, setShops ] = useState([]);
  const [ loading, setLoading ] = useState( true );
  const { addMessage, addError, resetAll } = useContext( MessageContext );

  useEffect( async () => {
    await API_GetRoles( ( data, message ) => {
      if(data){
        setRoles(data.data);
      }
    });
    await API_GetShops( (data , message) => {
      if(data){
        setShops(data.data);
      }
    });
    resetAll();
    setLoading(false);
  },[]);

  const registerSubmit = async (dataInput) => {
    resetAll();
    setLoading(true);

    await API_Register( dataInput, (data, message ) => {
      if(data){
        addMessage( 'Utente creato con successo!' );
      }
      else{
        addError(message);
      }      
    });
    setLoading(false);
  };


  return (
    <MasterLayout>
      { loading ? <Loader /> : null }
      <StandardPage title="Nuovo Utente"> 
        <div className="row">
          <div className="col-md-4">
            <UserForm 
              roles = { roles }
              shops = { shops }
              onSubmit={ ( dataInput ) => { registerSubmit( dataInput ) } }
            />
          </div>
        </div>        
      </StandardPage>
    </MasterLayout>
  );
}

export default AddUser;