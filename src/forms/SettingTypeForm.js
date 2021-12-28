import React, { useState, useContext, useEffect } from "react";
import { Context as MessageContext } from "../context/MessageContext";
import { API_GetServices } from "../api/ShopService";

const SettingTypeForm = ( { settingType, label, onSubmit } ) => {

  const [dataInput, setDataInput] = useState({
    name: "",
    type: "",
    desc: "",
    service_id: "",
  });

  const [ services, setServices ] = useState( [] );
  const { state , resetValidation } = useContext( MessageContext );

  useEffect( () => {
    if( settingType ){
      setDataInput( settingType );
    }
  }, [ settingType ]);

  useEffect( () => { getServices(); }, []);

  const getServices = async () => {
    await API_GetServices(( data, message ) => {
      if(data){
        setServices(data.data);
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
        <div className="col-md-12">      
          <label className="fst-italic" htmlFor="name">Nome</label>
          <input value={dataInput.name} onChange={ handleInput } id="name" className="form-control" type="text" placeholder="nome"  />
          <small className="text-danger">
            {state.validations ? state.validations.name : null}
          </small>        
        </div>
      </div>
      <div className="row mb-3">            
        <div className="col-md-6">   
          <label className="fst-italic" htmlFor="service_id">Servizio</label>   
          <select value={ dataInput.service_id } className="form-control" id="service_id" type="text" onChange={ (e) => handleInput(e) }>
            <option value="">seleziona servizio</option>
            { services.map( (service, i) => { return (<option key={ service.id } value={ service.id }>{ service.name }</option>)})}
          </select>
          <small className="text-danger">{state.validations ? state.validations.service_id : null}</small>        
        </div>
        <div className="col-md-6">
          <label className="fst-italic" htmlFor="type">Tipo</label>
          <select value={ dataInput.type } className="form-control" id="type" type="text" onChange={ (e) => handleInput(e) }>
            <option value="">seleziona tipo</option>
            <option value="boolean" >boolean</option>
            <option value="number">number</option>
            <option value="string">string</option>
            <option value="json">json</option>
          </select>
          <small className="text-danger">{state.validations ? state.validations.type : null}</small>
        </div>          
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label className="fst-italic" htmlFor="desc">Descrizione</label>
          <textarea className="form-control" id="desc" onChange={ (e) => handleInput(e)} placeholder="descrizione" value={ dataInput.desc }></textarea>
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

export default SettingTypeForm;