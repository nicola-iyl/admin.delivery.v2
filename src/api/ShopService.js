import _API from  "./_API";
import { sendResponse } from "../utilities/sendResponse"; 

export async function API_GetShops( callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'shops', config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_GetShop( id, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'shop/'+ id, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_DeleteShop( id, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.delete( 'shop/'+ id, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_AddShop( dataInput, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.post( 'shop', dataInput, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}