/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import TableShops from "../../tables/TableShops";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_GetShops, API_DeleteShop } from "../../api/ShopService";
import Loader from "../../components/Loader";
import { sort } from "../../utilities/sort";

const ShopsList = () => {

  const [ shops, setShops ] = useState([]);
  const [ loading, setLoading ] = useState( true );
  const { addMessage, addError, resetAll } = useContext( MessageContext );

  useEffect( () => {
    getShops();  
  },[]);

  const getShops = async ()=> {
    await API_GetShops( async(data, message) => {
      if(data){ setShops( data.data ); }      
      setLoading(false);
    });
  }

  const sortByType = () => {
    const copy = [...shops];
    copy.sort((a, b) => (a.shopType.name > b.shopType.name) ? 1 : -1);
    setShops(copy);
  }

  const deleteShop = async (id) => {
    if(window.confirm("Sicuro ?")){
      API_DeleteShop(id, ( result, message ) => {
        if( result ){
          setShops( shops.filter( user => user.id !== id ) );
          addMessage( "Utente eliminato con successo" );
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
      <StandardPage title="Shops"> 
        <TableShops 
          sortBy = { (field) => sort( field, shops, setShops ) } 
          sortByType = { sortByType } 
          removeShop={ (id) => { deleteShop(id) }} 
          shops={ shops }/>
      </StandardPage>
    </MasterLayout>
  );
}

export default ShopsList;