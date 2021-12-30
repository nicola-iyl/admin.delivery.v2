import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_AddSettingType } from "../../api/ShopService";
import Loader from "../../components/Loader";
import SettingTypeForm from "../../forms/SettingTypeForm";

const AddSettingType = () => {

  const [ loading, setLoading ] = useState( false );
  const { addMessage, addError, resetAll } = useContext( MessageContext );
  const navigate = useNavigate();

  const addSubmit = async ( dataInput ) => {
    resetAll();
    setLoading(true);
    await API_AddSettingType( dataInput, ( data, message ) => {
      
      if(data){
        addMessage('Nuova Configurazione creata con successo!');
        navigate('/setting_types');
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
      <StandardPage title="Nuova Configurazione"> 
        <div className="row">
          <div className="col-md-6">
            <SettingTypeForm onSubmit={ ( dataInput ) => { addSubmit( dataInput ) } } label="Aggiungi Configurazione" />
          </div>
        </div>        
      </StandardPage>
    </MasterLayout>
  );
}

export default AddSettingType;