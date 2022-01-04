import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_AddSetting } from "../../api/ShopService";
import Loader from "../../components/Loader";
import SettingForm from "../../forms/SettingForm";

const AddSetting = () => {

  const [ loading, setLoading ] = useState( false );
  const { addMessage, addError, resetAll } = useContext( MessageContext );
  const navigate = useNavigate();

  const addSubmit = async ( dataInput ) => {
    resetAll();
    setLoading(true);
    await API_AddSetting( dataInput, ( data, message ) => {
      
      if(data){
        addMessage('Nuovo Settaggio creato con successo!');
        navigate('/settings');
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
      <StandardPage title="Nuova Impostazione"> 
        <div className="row">
          <div className="col-md-6">
            <SettingForm onSubmit={ ( dataInput ) => { addSubmit( dataInput ) } } label="Aggiungi Impostazione" />
          </div>
        </div>        
      </StandardPage>
    </MasterLayout>
  );
}

export default AddSetting;