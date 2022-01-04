import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_GetSetting, API_UpdateSetting } from "../../api/ShopService";
import Loader from "../../components/Loader";
import SettingForm from "../../forms/SettingForm";

const EditSetting = ( { id } ) => {

  const [ loading, setLoading ] = useState( false );
  const [ setting, setSetting ] = useState( null );
  const { addMessage, addError, resetAll } = useContext( MessageContext );
  const navigate = useNavigate();

  useEffect(() => {
    getSetting( id )
  }, []);

  const getSetting = async ( id ) => {
    setLoading(true);
    resetAll();
    await API_GetSetting( id ,( data, message ) => {
      if( data ){ setSetting( data.data ) }
      
    });
    setLoading(false)
  }

  const updateSubmit = async ( dataInput ) => {
    resetAll();
    setLoading(true);
    await API_UpdateSetting( id, dataInput, ( data, message ) => {
      
      if(data){
        addMessage('Impostazione Configurazione aggiornata con successo!');
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
      <StandardPage title="Modifica Impostazioni Configurazione"> 
        <div className="row">
          <div className="col-md-6">
            <SettingForm setting = { setting } onSubmit={ ( dataInput ) => { updateSubmit( dataInput ) } } label="Modifica Impostazioni Configurazione" />
          </div>
        </div>        
      </StandardPage>
    </MasterLayout>
  );
}
export default EditSetting;