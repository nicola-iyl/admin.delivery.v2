import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_GetShop, API_UpdateShop } from "../../api/ShopService";
import Loader from "../../components/Loader";
import ShopForm from "../../forms/ShopForm";

const EditShop = ({ id }) => {

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

  const updateSubmit = async ( dataInput ) => {
    resetAll();
    setLoading(true);
    await API_UpdateShop( id, dataInput, ( data, message ) => {
      
      if(data){
        addMessage('Shop aggiornato con successo!');
        navigate('/shops');
      }
      else{
        addError(message);
      }
      setLoading(false);
    });
  }

  return(
    <MasterLayout>
      { loading ? <Loader /> : null }
      <StandardPage title="Modifica Shop"> 
        <ShopForm shop = { shop } onSubmit={ ( dataInput ) => { updateSubmit( dataInput ) } } label="Modifica Shop" />
      </StandardPage>
    </MasterLayout>
  );
}

export default EditShop;