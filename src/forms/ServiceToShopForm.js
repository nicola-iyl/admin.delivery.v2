import React, { useState, useContext, useEffect } from "react";
import { Context as MessageContext } from "../context/MessageContext";
import { API_GetServices, API_GetShops } from "../api/ShopService";

const ServiceToShopForm = ( { shop, label, onSubmit } ) => {

  const [ services, setServices ] = useState([]);
  const [ shops, setShops ] = useState([]);
  const { state , resetValidation } = useContext( MessageContext );

  const [dataInput, setDataInput] = useState({
    shop_id: "",
    service_id: "",
  });

  useEffect( () => {
    if( shop ){
      setDataInput( { ...dataInput, shop_id : shop.id } );
    }
  }, [ shop ]);

  useEffect( () => {
    getServices();
    getShops();
  }, []);

  const getServices = async () => {
    await API_GetServices(( data, message ) => {
      if(data){
        setServices(data.data);
      }
    });
  }

  const getShops = async() => {
    await API_GetShops(( data, message ) => {
      if(data){
        setShops(data.data);
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
          <label className="fst-italic" htmlFor="service_id">Shop</label>   
          <select value={ dataInput.shop_id } className="form-control" id="shop_id" onChange={ (e) => handleInput(e) }>
            <option value="">seleziona shop</option>
            { shops.map( (shop, i) => { return (<option key={ shop.id } value={ shop.id }>{ shop.ragione_sociale }</option>)})}
          </select>
          <small className="text-danger">{state.validations ? state.validations.shop_id : null}</small>        
        </div>
        <div className="col-md-6">   
          <label className="fst-italic" htmlFor="service_id">Servizio</label>   
          <select value={ dataInput.service_id } className="form-control" id="service_id" onChange={ (e) => handleInput(e) }>
            <option value="">seleziona servizio</option>
            { services.map( (service, i) => { return (<option key={ service.id } value={ service.id }>{ service.name }</option>)})}
          </select>
          <small className="text-danger">{state.validations ? state.validations.service_id : null}</small>        
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

export default ServiceToShopForm;