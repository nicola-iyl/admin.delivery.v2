import React, { useState, useEffect, useContext } from "react";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import TableSettingTypes from "../../tables/TableSettingTypes";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_GetSettingTypes, API_DeleteSettingType } from "../../api/ShopService";
import Loader from "../../components/Loader";
import { sort } from "../../utilities/sort";

const SettingTypesList = () => {
  const [ settingTypes, setSettingTypes ] = useState([]);
  const [ loading, setLoading ] = useState( true );
  const { addMessage, addError, resetAll } = useContext( MessageContext );

  useEffect( () => {
    getSettingTypes();  
  },[]);

  const sortByService = () => {
    const copy = [...settingTypes];
    copy.sort((a, b) => (a.service.label > b.service.label) ? 1 : -1);
    setSettingTypes(copy);
  }

  const getSettingTypes = async ()=> {
    await API_GetSettingTypes( async(data, message) => {
      if(data){ setSettingTypes( data.data ); }      
      setLoading(false);
    });
  }

  const deleteSettingType = async (id) => {
    if(window.confirm("Sicuro ?")){
      API_DeleteSettingType(id, ( result, message ) => {
        if( result ){
          setSettingTypes( settingTypes.filter( settingType => settingType.id !== id ) );
          addMessage( "Tipologia Configurazione eliminata con successo" );
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
      <StandardPage title="Configurazioni Servizi"> 
        <TableSettingTypes
          sortBy = { (field) => sort( field, settingTypes, setSettingTypes ) } 
          sortByService = { sortByService }
          removeSettingType = { (id) => { deleteSettingType(id) }} 
          settingTypes = { settingTypes }/>
      </StandardPage>
    </MasterLayout>
  );
}
export default SettingTypesList;