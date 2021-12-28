import React from "react";
import { useLocation } from "react-router-dom";

import SettingTypesList from "./setting_types/SettingTypesList";
import EditSettingType from "./setting_types/EditSettingType";
import AddSettingType from "./setting_types/AddSettingType";

const SettingTypes = () => {

  const query = new URLSearchParams( useLocation().search );
  const action = query.get('action');
  const id = query.get('id');
  
  // FORM NUOVA CONFIGURAZIONE
  if( action === 'add' ){
    return (
      <AddSettingType />
    );    
  }
  // FORM MODIFICA
  else if( action === 'edit' ){
    return (
      <EditSettingType id = { id } />
    );  
  }
  // LISTA SERVIZI
  else{
    return (
      <SettingTypesList />
    );    
  }
}

export default SettingTypes;