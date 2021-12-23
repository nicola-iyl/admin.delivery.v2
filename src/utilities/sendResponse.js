export const sendResponse = (response, callback, error) => {
  if(response){
    if(response.status === 200){
      callback(response.data, null);
    }
    else if(response.data.message){
      callback( false, response.data.message );
    }
    else if(response.data.errors){
      callback( false, response.data.errors );
    }
    else if(response.data.validation_errors){
      callback( false, response.data.validation_errors );
    }
    else{
      callback( false, "errore non tracciato" );
    }
  }
  else{
    callback( false, error.message );
  }
}