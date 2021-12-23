import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_GetShop } from "../../api/ShopService";
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
    await API_GetShop( id ,( data, message ) => {
      if( data ){ setShop( shop ) }
    });
    setLoading(false)
  }

  const updateSubmit = () => {

  }

  return(
    <MasterLayout>
      { loading ? <Loader /> : null }
      <StandardPage title="Nuovo Utente"> 
        <ShopForm onSubmit={ ( dataInput ) => { updateSubmit( dataInput ) } } label="Modifica Shop" />
      </StandardPage>
    </MasterLayout>
  );
}

export default EditShop;