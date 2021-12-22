import React from "react";

const Alert = ({message,type}) => {
  if (message === "") return null;

  const alertType = `mb-0 alert alert-${type}`;
  return ( 
    <div className="card mb-2 mt-2">
      <div className="card-body">
        <div className={ alertType } role="alert">
          { message }
        </div>
      </div>
    </div>           
  );
};

export default Alert;
