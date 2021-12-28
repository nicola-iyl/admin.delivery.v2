import React, { useState, useContext, useEffect } from "react";
import { Context as MessageContext } from "../context/MessageContext";

const ServiceForm = ( { service, label, onSubmit } ) => {

  const [dataInput, setDataInput] = useState({
    name: "",
    label: "",
    desc: "",
    price: "",
  });

  const { state , resetValidation } = useContext(MessageContext);

  useEffect( () => {
    if( service ){
      setDataInput(service);
    }
  }, [ service ]);

  const handleInput = (e) => {
    e.persist()
    setDataInput({ ...dataInput, [e.target.id] : e.target.value});
    resetValidation( e.target.id );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit( dataInput ) } }>
      <div className="row mb-3">
        <div className="col-md-4">      
          <label htmlFor="name">Nome</label>
          <input value={dataInput.name} onChange={ handleInput } id="name" className="form-control" type="text" placeholder="nome"  />
          <small className="text-danger">
            {state.validations ? state.validations.name : null}
          </small>        
        </div>
        <div className="col-md-4">      
          <label htmlFor="label">Label</label>
          <input value={dataInput.label} onChange={ handleInput } id="label" className="form-control" type="text" placeholder="label"  />
          <small className="text-danger">
            {state.validations ? state.validations.label : null}
          </small>        
        </div>
        <div className="col-md-4">      
          <label htmlFor="price">Prezzo</label>
          <input value={dataInput.price} onChange={ handleInput } id="price" className="form-control" type="text" placeholder="price"  />
          <small className="text-danger">
            {state.validations ? state.validations.price : null}
          </small>        
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">      
          <label htmlFor="desc">Descrizione</label>
          <textarea value={dataInput.desc} onChange={ handleInput } id="desc" className="form-control" type="text" placeholder="descrizione" ></textarea>
          <small className="text-danger">
            {state.validations ? state.validations.name : null}
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
}

export default ServiceForm;