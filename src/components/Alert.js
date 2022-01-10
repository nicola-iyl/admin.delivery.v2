import React, { useContext } from "react";
import { Context as MessageContext } from "../context/MessageContext";

const Alert = ({message,type}) => {
  const { clearMessages } = useContext( MessageContext );
  if (message === "") return null;

  const alertType = `mb-0 alert alert-${type} alert-dismissible`;
  return ( 
    <div className="card mb-2 mt-2">
      <div className="card-body">
        <div className={ alertType } role="alert">
          { message }
          <button type="button" className="btn-close" aria-label="Close" onClick={ () => clearMessages() }></button>
        </div>
      </div>
    </div>           
  );
};

export default Alert;
