import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_GetShop, API_AddServiceToShop } from "../../api/ShopService";
import Loader from "../../components/Loader";
import ServiceToShopForm from "../../forms/ServiceToShopForm";

const AddServiceToShop = ( { id } ) => {

  const [ loading, setLoading ] = useState( false );
  const [ shop, setShop ] = useState( null );
  const { addMessage, addError, resetAll } = useContext( MessageContext );
  const navigate = useNavigate();

  useEffect(() => {
    getShop( id )
  }, []);

  const getShop = async ( id ) => {
    setLoading(true);
    resetAll();
    await API_GetShop( id ,( data, message ) => {
      if( data ){ setShop( data.data ) }
      
    });
    setLoading(false)
  }

  const addSubmit = async ( dataInput ) => {
    resetAll();
    setLoading(true);
    await API_AddServiceToShop( dataInput.shop_id, dataInput.service_id, ( data, message ) => {
      if(data){
        addMessage('Servizio aggiunto con successo!');
        navigate('/shops');
      }
      else{
        addError(message);
      }
      setLoading(false);
    })
  }

  return (
    <MasterLayout>
      { loading ? <Loader /> : null }
      <StandardPage title="Attiva Servizio"> 
        <ServiceToShopForm shop = { shop } onSubmit={ ( dataInput ) => { addSubmit( dataInput ) } } label="Aggiungi Servizio allo Shop" />
      </StandardPage>
    </MasterLayout>
  );
}

export default AddServiceToShop;