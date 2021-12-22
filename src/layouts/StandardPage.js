import React, { useContext } from "react";

import Alert from "../components/Alert";
import { Context as MessageContext } from "../context/MessageContext";

const StandardPage = ( { children, title } ) => {

  const { state } = useContext( MessageContext );

  return (
    <div className="container-fluid px-4">
      
      <h1 className="mt-4">{ title }</h1>
      <Alert message={ state.message } type='success' />
      <Alert message={ state.error } type='danger' />
      <div className="card mb-4">
        <div className="card-body">
          { children }
        </div>
      </div>
    </div>
  );
}

export default StandardPage;