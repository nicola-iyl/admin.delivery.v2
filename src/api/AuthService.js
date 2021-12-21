import _API from  "./_API";

/*export const API_login = async (dataInput, callback) => {
  await _API.post('login', dataInput)
    .then((res) => {
      if (res.status === 200) {
        callback(res, null);        
      } 
      else {
        if (res.data.message) {
          callback(false, res.data.message);
        }
      }
    })
    .catch((error) => {
      callback(false, error.message);
    });
}*/

export async function API_Login(dataInput, callback){
  await _API.post('login', dataInput)
    .then( ( response ) => { responseResult( response, callback, null ) } )
    .catch( ( error ) => { responseResult( false, callback, error ) } );
}

function responseResult( response, callback, error ){
  if(response){
    if(response.status === 200){
      callback(response.data, null);
    }
    else{
      if(response.data.message){
        callback(false, response.data.message);
      }
      callback(false, "errore non tracciato");
    }
  }
  else{
    callback(false, error.message);
  }
}