import React from "react";

const Alert = ({message,type}) => {
  if (message === "") return null;

  const alertType = `mt-3 mb-3 alert alert-${type}`;
  return (    
    <div className={ alertType } role="alert">
      { message }
    </div>    
  );
};

export default Alert;
