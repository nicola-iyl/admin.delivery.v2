import React from "react";
import { useLocation } from "react-router-dom";

import ServicesList from "./services/ServicesList";
import AddService from "./services/AddService";
import EditService from "./services/EditService";

const Services = () => {

  const query = new URLSearchParams( useLocation().search );
  const action = query.get('action');
  const id = query.get('id');

  // FORM NUOVO SERVIZIO
  if( action === 'add' ){
    return (
      <AddService />
    );    
  }
  // FORM MODIFICA
  else if( action === 'edit' ){
    return (
      <EditService id = { id } />
    );  
  }
  // LISTA SERVIZI
  else{
    return (
      <ServicesList />
    );    
  }
}

export default Services;