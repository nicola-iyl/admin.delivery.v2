import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_AddShop } from "../../api/ShopService";
import Loader from "../../components/Loader";
import ShopForm from "../../forms/ShopForm";

const AddShop = () => {

  const [ loading, setLoading ] = useState( false );
  const { addMessage, addError, resetAll } = useContext( MessageContext );
  const navigate = useNavigate();

  const addSubmit = async ( dataInput ) => {
    resetAll();
    setLoading(true);
    await API_AddShop( dataInput, ( data, message ) => {
      
      if(data){
        addMessage('Shop creato con successo!');
        navigate('/shops');
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
      <StandardPage title="Nuovo Shop"> 
        <ShopForm onSubmit={ ( dataInput ) => { addSubmit( dataInput ) } } label="Aggiungi Shop" />
      </StandardPage>
    </MasterLayout>
  );
}

export default AddShop;