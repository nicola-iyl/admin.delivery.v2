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

  const { state, resetValidation } = useContext( MessageContext );

  const handleInput = (e) => {
    e.persist()
    setDataInput( { ...dataInput, [e.target.id] : e.target.value} );
    resetValidation( e.target.id );
  }

  return (
    <form onSubmit={ (e) => { e.preventDefault(); onSubmit( dataInput ) } }>

      <div className="row mb-3">
        <div className="col-md-12">      
          <input onChange={ handleInput } value={ dataInput.name } id="name" className="form-control" type="text" placeholder="nome"  />
          <small className="text-danger">{ state.validations ? state.validations.name : null}</small>        
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-12">      
          <input onChange={ handleInput } value={ dataInput.email } id="email" className="form-control"  type="text" placeholder="email"  />
          <small className="text-danger">{ state.validations ? state.validations.email : null }</small>          
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">          
          <select onChange={ handleInput } id="role_id" className="form-control" >
              <option value="">ruolo</option>
              { roles.map( (role,i) => { return (<option key={ role.id } value={ role.id }>{ role.name }</option>) }) }
          </select>          
          <small className="text-danger">{ state.validations ? state.validations.role_id : null }</small>          
        </div>
        <div className="col-md-6">      
          <select onChange={ handleInput } id="shop_id" className="form-control" >
              <option value="">shop</option>
              <option value="0">nessuno</option>
              { shops.map( (shop,i) => { return <option key={ shop.id } value={ shop.id }>{ shop.ragione_sociale }</option> }) }
          </select>
          <small className="text-danger">{ state.validations ? state.validations.shop_id : null }</small>          
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-12">      
          <input onChange={ handleInput } value={ dataInput.password } className="form-control" id="password" type="password" placeholder="password"  />
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
