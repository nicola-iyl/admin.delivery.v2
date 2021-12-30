import React, { useState, useContext, useEffect } from "react";
import { Context as MessageContext } from "../context/MessageContext";
import { API_GetShops, API_GetSettingTypes } from "../api/ShopService";

const SettingForm = ( { setting, label, onSubmit } ) => {

  const [dataInput, setDataInput] = useState({
    shop_id: "",
    setting_type_id: "",
    value: "",
  });

  const [ shops, setShops ] = useState( [] );
  const [ settingTypes, setSettingTypes ] = useState( [] );
  const { state , resetValidation } = useContext( MessageContext );

  useEffect( () => {
    if( setting ){
      setDataInput( setting );
    }
  }, [ setting ]);

  useEffect( () => { getShops(); getSettingTypes(); }, []);

  const getShops = async() => {
    await API_GetShops(( data, message ) => {
      if(data){
        setShops(data.data);
      }
    });
  }

  const getSettingTypes = async() => {
    await API_GetSettingTypes(( data, message ) => {
      if(data){
        setSettingTypes(data.data);
      }
    });
  }

  const handleInput = (e) => {
    e.persist()
    setDataInput({ ...dataInput, [e.target.id] : e.target.value});
    resetValidation( e.target.id );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit( dataInput ) } }>
      <div className="row mb-3">            
        <div className="col-md-6">   
          <label className="fst-italic" htmlFor="shop_id">Shop</label>   
          <select value={ dataInput.shop_id } className="form-control" id="shop_id" type="text" onChange={ (e) => handleInput(e) }>
            <option value="">seleziona shop</option>
            { shops.map( (shop, i) => { return (<option key={ shop.id } value={ shop.id }>{ shop.name }</option>)})}
          </select>
          <small className="text-danger">{state.validations ? state.validations.shop_id : null}</small>        
        </div>
        <div className="col-md-6">
          <label className="fst-italic" htmlFor="settingType_id">Configurazione</label>   
          <select value={ dataInput.setting_type_id } className="form-control" id="setting_type_id" type="text" onChange={ (e) => handleInput(e) }>
            <option value="">seleziona shop</option>
            { settingTypes.map( (settingType, i) => { return (<option key={ settingType.id } value={ settingType.id }>{ settingType.label }</option>)})}
          </select>
          <small className="text-danger">{state.validations ? state.validations.setting_type_id : null}</small>   
        </div>          
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label className="fst-italic" htmlFor="value">Valore</label>
          <textarea className="form-control" id="value" onChange={ (e) => handleInput(e)} placeholder="descrizione" value={ dataInput.value }></textarea>
        </div>
      </div>
      <div className="mt-4 mb-0">
        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-block">
              { label }
          </button>
        </div>
      </div>
    </form>
  );
}

export default SettingForm;