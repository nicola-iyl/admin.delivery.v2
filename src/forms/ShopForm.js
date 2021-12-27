import React, { useState, useContext, useEffect } from "react";
import { Context as MessageContext } from "../context/MessageContext";

const ShopForm = ( { onSubmit, label, shop } ) => {

  const [dataInput, setDataInput] = useState({
    ragione_sociale: "",
    insegna: "",
    dominio: "",
    name: "",
    email: "",
    p_iva: "",
    shop_type_id: "",
    indirizzo: "",
    citta: "",
    prov: "",
    cap: "",
    tel: "",
    sede_legale: "",
    whatsapp:"",
  });

  const { state , resetValidation } = useContext(MessageContext);

  useEffect( () => {
    if( shop ){
      setDataInput(shop);
    }
  }, [ shop ]);

  const handleInput = (e) => {
    e.persist()
    setDataInput({ ...dataInput, [e.target.id] : e.target.value});
    resetValidation( e.target.id );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit( dataInput ) } }>
      <div className="row mb-3">
        <div className="col-md-4">      
          <input value={dataInput.ragione_sociale} onChange={ handleInput } id="ragione_sociale" className="form-control" type="text" placeholder="ragione sociale"  />
          <small className="text-danger">
            {state.validations ? state.validations.ragione_sociale : null}
          </small>        
        </div>
        <div className="col-md-4">      
          <input value={dataInput.insegna} onChange={ handleInput } id="insegna" className="form-control" type="text" placeholder="insegna"  />
          <small className="text-danger">
            {state.validations ? state.validations.insegna : null}
          </small>        
        </div>
        <div className="col-md-4">      
          <input value={dataInput.dominio} onChange={ handleInput } id="dominio" className="form-control" type="text" placeholder="dominio"  />
          <small className="text-danger">
            {state.validations ? state.validations.dominio : null}
          </small>        
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-4">      
          <input value={dataInput.name} onChange={ handleInput } id="name" className="form-control" type="text" placeholder="name" />
          <small className="text-danger">
            {state.validations ? state.validations.name : null}
          </small>        
        </div>
        <div className="col-md-4">      
          <input value={dataInput.email} onChange={ handleInput } id="email" className="form-control" type="text" placeholder="email"  />
          <small className="text-danger">
            {state.validations ? state.validations.email : null}
          </small>        
        </div>
        <div className="col-md-4">      
          <input value={dataInput.p_iva} onChange={ handleInput } id="p_iva" className="form-control"  type="text" placeholder="p_iva"  />
          <small className="text-danger">
            {state.validations ? state.validations.p_iva : null}
          </small>        
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">      
          <input value={dataInput.indirizzo} onChange={ handleInput } id="indirizzo" className="form-control" type="text" placeholder="indirizzo"  />
          <small className="text-danger">
            {state.validations ? state.validations.indirizzo : null}
          </small>        
        </div>
        <div className="col-md-4">      
          <input value={dataInput.citta} onChange={ handleInput } id="citta" className="form-control" type="text" placeholder="citta"  />
          <small className="text-danger">
            {state.validations ? state.validations.citta : null}
          </small>        
        </div>
        <div className="col-md-2">      
          <input value={dataInput.prov} onChange={ handleInput } id="prov" className="form-control" type="text" placeholder="prov"  />
          <small className="text-danger">
            {state.validations ? state.validations.prov : null}
          </small>        
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-4">      
          <input value={dataInput.cap} onChange={ handleInput } id="cap" className="form-control" type="text" placeholder="cap"  />
          <small className="text-danger">
            {state.validations ? state.validations.cap : null}
          </small>        
        </div>
        <div className="col-md-4">      
          <input value={dataInput.tel} onChange={ handleInput } id="tel" className="form-control" type="text" placeholder="tel"  />
          <small className="text-danger">
            {state.validations ? state.validations.tel : null}
          </small>        
        </div>
        <div className="col-md-4">      
          <input value={dataInput.whatsapp} onChange={ handleInput } id="whatsapp" className="form-control" type="text" placeholder="whatsapp"  />
          <small className="text-danger">
            {state.validations ? state.validations.whatsapp : null}
          </small>        
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <select onChange={ handleInput } value={ dataInput.shop_type_id } id="shop_type_id" className="form-control"  name="shop_type_id" >
            <option value="">seleziona</option>
            <option value="1">Pizzeria</option>
            <option value="2">Ristorante</option>
            <option value="3">Gelateria</option>
            <option value="4">Rosticceria</option>
          </select>
          <small className="text-danger">
            {state.validations ? state.validations.shop_type_id : null}
          </small>        
        </div>
        <div className="col-md-8">      
          <input value={dataInput.sede_legale} onChange={ handleInput } id="sede_legale" className="form-control" type="text" placeholder="sede_legale"  />
          <small className="text-danger">
            {state.validations ? state.validations.sede_legale : null}
          </small>        
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
};

export default ShopForm;
