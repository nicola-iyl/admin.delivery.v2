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
  const [ settingTypeSelected, setSettingTypeSelected] = useState( null );
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

  const changeSettingType = (e) => {
    handleInput(e);
    
    const copy = [...settingTypes];
    const found = copy.find( element => element.id === parseInt(e.target.value ));
    
    setSettingTypeSelected( found );
    console.log(settingTypeSelected);
  }

  const getInputForValue = () => {

    if(settingTypeSelected === null) return null

    switch (settingTypeSelected.type) {
      case "boolean":
        return (
          <select  name="value" id="value" onChange={ (e) => handleInput(e)} placeholder="" value={ dataInput.value } className="form-control">
            <option value="">seleziona</option>
            <option value="1">Attivo</option>
            <option value="0">Non attivo</option>
          </select>
        );        
      case "number":
        return (
          <input type="number"  name="value" id="value" onChange={ (e) => handleInput(e)} value={ dataInput.value } className="form-control" />
        );
      case "string":
        return (
          <textarea  name="value" id="value" onChange={ (e) => handleInput(e)}  value={ dataInput.value } className="form-control"></textarea>
        );
      case "json":
        return (
          <textarea  name="value" id="value" onChange={ (e) => handleInput(e)}  value={ dataInput.value } className="form-control"></textarea>
        );
      default:
        return null
    }
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit( dataInput ) } }>
      <div className="row mb-3">            
        <div className="col-md-6">   
          <label className="fst-italic" htmlFor="shop_id">Shop</label>   
          <select value={ dataInput.shop_id } className="form-control" id="shop_id" type="text" onChange={ (e) => handleInput(e) }>
            <option value="">seleziona shop</option>
            { shops.map( (shop, i) => { return (<option key={ shop.id } value={ shop.id }>{ shop.ragione_sociale }</option>)})}
          </select>
          <small className="text-danger">{state.validations ? state.validations.shop_id : null}</small>        
        </div>
        <div className="col-md-6">
          <label className="fst-italic" htmlFor="settingType_id">Configurazione</label>   
          <select value={ dataInput.setting_type_id } className="form-control" id="setting_type_id" type="text" onChange={ (e) => changeSettingType(e) }>
            <option value="">seleziona configurazione</option>
            { settingTypes.map( (settingType, i) => { return (<option key={ settingType.id } value={ settingType.id }>{ settingType.name } - ({ settingType.type })</option>)})}
          </select>
          <small className="text-danger">{state.validations ? state.validations.setting_type_id : null}</small>   
        </div>          
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label className="fst-italic" htmlFor="value">Valore </label>
          { getInputForValue() }
          <small>{ ( settingTypeSelected !== null ) ? settingTypeSelected.desc : null }</small>
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