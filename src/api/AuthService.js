import _API from  "./_API";

export async function API_Login( dataInput, callback ){
  await _API.post( 'login', dataInput )
    .then( ( response ) => { responseResult( response, callback, null ) } )
    .catch( ( error ) => { responseResult( false, callback, error ) } );
}

export async function API_Logout( callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'logout', config )
    .then( ( response ) => { responseResult( response, callback, null ) } )
    .catch( ( error ) => { responseResult( false, callback, error ) } );
}

function responseResult( response, callback, error ){
  if(response){
    if(response.status === 200){
      callback(response.data, null);
    }
    else if(response.data.message){
      callback( false, response.data.message );
    }
    else{
      callback( false, "errore non tracciato" );
    }
  }
  else{
    callback( false, error.message );
  }
}