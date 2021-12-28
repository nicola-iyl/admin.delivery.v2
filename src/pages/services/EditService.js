import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_GetService, API_UpdateService } from "../../api/ShopService";
import Loader from "../../components/Loader";
import ServiceForm from "../../forms/ServiceForm";


const EditService = ( { id } ) => {

  const [ loading, setLoading ] = useState( false );
  const [ service, setService ] = useState( null );
  const { addMessage, addError, resetAll } = useContext( MessageContext );
  const navigate = useNavigate();

  useEffect(() => {
    getService( id )
  }, []);

  const getService = async ( id ) => {
    setLoading(true);
    resetAll();
    await API_GetService( id ,( data, message ) => {
      if( data ){ setService( data.data ) }
      
    });
    setLoading(false)
  }

  const updateSubmit = async ( dataInput ) => {
    resetAll();
    setLoading(true);
    await API_UpdateService( id, dataInput, ( data, message ) => {
      
      if(data){
        addMessage('Servizio aggiornato con successo!');
        navigate('/services');
      }
      else{
        addError(message);
      }
      setLoading(false);
    });
  }

  return(
    <MasterLayout>
      { loading ? <Loader /> : null }
      <StandardPage title="Modifica Servizio"> 
        <div className="row">
          <div className="col-md-6">
            <ServiceForm service = { service } onSubmit={ ( dataInput ) => { updateSubmit( dataInput ) } } label="Modifica Servizio" />
          </div>
        </div>        
      </StandardPage>
    </MasterLayout>
  );
}

export default EditService;