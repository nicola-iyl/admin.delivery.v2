import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_AddService } from "../../api/ShopService";
import Loader from "../../components/Loader";
import ServiceForm from "../../forms/ServiceForm";

const AddService = () => {
  const [ loading, setLoading ] = useState( false );
  const { addMessage, addError, resetAll } = useContext( MessageContext );
  const navigate = useNavigate();

  const addSubmit = async ( dataInput ) => {
    resetAll();
    setLoading(true);
    await API_AddService( dataInput, ( data, message ) => {
      
      if(data){
        addMessage('Servizio creato con successo!');
        navigate('/services');
      }
      else{
        addError(message);
      }
      setLoading(false);
    });
  }

  return (
    <MasterLayout>
      { loading ? <Loader /> : null }
      <StandardPage title="Nuovo Servizio"> 
        <div className="row">
          <div className="col-md-6">
            <ServiceForm onSubmit={ ( dataInput ) => { addSubmit( dataInput ) } } label="Aggiungi Servizio" />
          </div>
        </div>        
      </StandardPage>
    </MasterLayout>
  );
}

export default AddService;