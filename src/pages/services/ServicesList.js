import React, { useState, useContext, useEffect } from "react";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import Loader from "../../components/Loader";
import TableServices from "../../tables/TableServices";
import { API_GetServices, API_DeleteService } from "../../api/ShopService";
import { Context as MessageContext } from "../../context/MessageContext";

import { sort2 } from "../../utilities/sort2";


const ServiceList = () => {

  const [ services, setServices ] = useState( [] );
  const [ loading, setLoading ] = useState( true );
  const [ sortUp, setSortUp ] = useState( true );
  const { addMessage, addError } = useContext( MessageContext );

  useEffect( () => {
    getServices();  
  },[]);

  const getServices = async () => {
    await API_GetServices( async(data, message) => {
      if(data){ setServices( data.data ); }      
      setLoading(false);
    });
  }

  const deleteService = async (id) => {
    if(window.confirm("Sicuro ?")){
      API_DeleteService(id, ( result, message ) => {
        if( result ){
          setServices( services.filter( service => service.id !== id ) );
          addMessage( "Servizio eliminato con successo" );
        }
        else{
          addError( message );
        }
      });
    } 
  }

  return(
    <MasterLayout>
      { loading ? <Loader /> : null }
      <StandardPage title="Servizi/Funzionalit√†"> 
        <TableServices 
          sortBy = { (field) => sort2( field, services, setServices, sortUp, () => { setSortUp( !sortUp) } ) } 
          removeService ={ ( id ) => { deleteService( id ) }} 
          services = { services }/>
      </StandardPage>
    </MasterLayout>
  );
}

export default ServiceList;