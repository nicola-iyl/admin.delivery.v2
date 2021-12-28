import React from "react";
import { useLocation } from "react-router-dom";

import SettingsList from "./settings/SettingsList";
import EditSetting from "./settings/EditSetting";
import AddSetting from "./settings/AddSetting";

const Settings = () => {

  const query = new URLSearchParams( useLocation().search );
  const action = query.get('action');
  const id = query.get('id');
  
  // FORM NUOVA CONFIGURAZIONE
  if( action === 'add' ){
    return (
      <AddSetting />
    );    
  }
  // FORM MODIFICA
  else if( action === 'edit' ){
    return (
      <EditSetting id = { id } />
    );  
  }
  // LISTA SERVIZI
  else{
    return (
      <SettingsList />
    );    
  }
}

export default Settings;