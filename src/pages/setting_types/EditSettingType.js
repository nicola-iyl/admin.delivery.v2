import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_GetSettingType, API_UpdateSettingType } from "../../api/ShopService";
import Loader from "../../components/Loader";
import SettingTypeForm from "../../forms/SettingTypeForm";

const EditSettingType = ( { id } ) => {

  const [ loading, setLoading ] = useState( false );
  const [ settingType, setSettingType ] = useState( null );
  const { addMessage, addError, resetAll } = useContext( MessageContext );
  const navigate = useNavigate();

  useEffect(() => {
    getSettingType( id )
  }, []);

  const getSettingType = async ( id ) => {
    setLoading(true);
    resetAll();
    await API_GetSettingType( id ,( data, message ) => {
      if( data ){ setSettingType( data.data ) }
      
    });
    setLoading(false)
  }

  const updateSubmit = async ( dataInput ) => {
    resetAll();
    setLoading(true);
    await API_UpdateSettingType( id, dataInput, ( data, message ) => {
      
      if(data){
        addMessage('Configurazione aggiornata con successo!');
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
      <StandardPage title="Modifica Configurazione"> 
        <div className="row">
          <div className="col-md-6">
            <SettingTypeForm settingType = { settingType } onSubmit={ ( dataInput ) => { updateSubmit( dataInput ) } } label="Modifica Configurazione" />
          </div>
        </div>        
      </StandardPage>
    </MasterLayout>
  );
}

export default EditSettingType;