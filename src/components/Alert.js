import React from "react";
import FlashMessage from 'react-flash-message';

const Alert = ({message,type}) => {
  if (message === "") return null;

  const alertType = `mt-3 mb-3 alert alert-${type}`;
  return (
    <FlashMessage duration={5000} persistOnHover={true}>
      <div className={ alertType } role="alert">
        { message }
      </div>
    </FlashMessage>
    
  );
};

export default Alert;
