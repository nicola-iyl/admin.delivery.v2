import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import TableSettings from "../../tables/TableSettings";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_GetSettings, API_DeleteSetting } from "../../api/ShopService";
import Loader from "../../components/Loader";
import { sort } from "../../utilities/sort";

const SettingsList = () => {

  const [ settings, setSettings ] = useState([]);
  const [ loading, setLoading ] = useState( true );
  const { addMessage, addError } = useContext( MessageContext );

  useEffect( () => {
    getSettings();  
  },[]);

  const sortBySettingType = () => {
    const copy = [...settings];
    copy.sort((a, b) => (a.settingType.name > b.settingType.name) ? 1 : -1);
    setSettings(copy);
  }

  const getSettings = async ()=> {
    await API_GetSettings( async(data, message) => {
      if( data ){ setSettings( data.data ); }      
      setLoading( false );
    });
  }

  const deleteSetting = async (id) => {
    if(window.confirm("Sicuro ?")){
      API_DeleteSetting(id, ( result, message ) => {
        if( result ){
          setSettings( settings.filter( setting => setting.id !== id ) );
          addMessage( "Settaggio Configurazione eliminata con successo" );
        }
        else{
          addError( message );
        }
      });
    } 
  }

  return (
    <MasterLayout>
      { loading ? <Loader /> : null }      
      <StandardPage title="Settaggi Configurazioni"> 
        <div className="card mb-2 mt-2">
          <div className="card-body">
            <Link className="btn btn-primary" to={{ pathname: '/settings', search: '?action=add' }}>Nuovo Settaggio</Link>
          </div>
        </div>
        <TableSettings
          sortBy = { (field) => sort( field, settings, setSettings ) } 
          sortBySettingType = { sortBySettingType }
          removeSetting = { (id) => { deleteSetting(id) }} 
          settings = { settings }/>
      </StandardPage>
    </MasterLayout>
  );
}

export default SettingsList;