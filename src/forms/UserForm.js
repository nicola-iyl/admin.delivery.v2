import React, { useState, useContext } from "react";
import {Context as MessageContext} from "../context/MessageContext";

const UserForm = ( { onSubmit, roles, shops } ) => {

  const [ dataInput, setDataInput ] = useState({
      name: "",
      email: "",
      role_id: "",
      shop_id: "",
      password: ""
  });

  const { state, resetValidation, resetAll } = useContext( MessageContext );
  console.log(state.validations);

  const handleInput = (e) => {
    e.persist()
    setDataInput( { ...dataInput, [e.target.id] : e.target.value} );
    resetValidation( e.target.id );
  }

  return (
    <form onSubmit={ (e) => { e.preventDefault(); onSubmit( dataInput ) } }>

      <div className="row mb-3">
        <div className="col-md-12">      
          <input className="form-control" id="name" type="text" placeholder="nome" value={ dataInput.name } onChange={ (e) => handleInput(e) } />
          <small className="text-danger">{ state.validations ? state.validations.name : null}</small>        
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-12">      
          <input className="form-control" id="email" type="text" placeholder="email" value={ dataInput.email } onChange={ handleInput } />
          <small className="text-danger">{ state.validations ? state.validations.email : null }</small>          
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">          
          <select id="role_id" className="form-control" onChange={ handleInput }>
              <option value="">ruolo</option>
              { roles.map( (role,i) => { return (<option key={ role.id } value={ role.id }>{ role.name }</option>) }) }
          </select>          
          <small className="text-danger">{ state.validations ? state.validations.role_id : null }</small>          
        </div>
        <div className="col-md-6">      
          <select id="shop_id" className="form-control" onChange={ handleInput }>
              <option value="">shop</option>
              <option value="0">nessuno</option>
              { shops.map( (shop,i) => { return <option key={ shop.id } value={ shop.id }>{ shop.ragione_sociale }</option> }) }
          </select>
          <small className="text-danger">{ state.validations ? state.validations.shop_id : null }</small>          
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-12">      
          <input className="form-control" id="password" type="password" placeholder="password" value={ dataInput.password } onChange={ handleInput } />
          <small className="text-danger">{ state.validations ? state.validations.password : null }</small>          
        </div>
      </div>
      
      <div className="mt-4 mb-0">
        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-block">
              Crea Utente
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
