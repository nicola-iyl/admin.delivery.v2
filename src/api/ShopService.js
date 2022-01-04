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

export async function API_UpdateShop( id, dataInput, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.put( 'shop/'+ id, dataInput, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_GetServices( callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'services', config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_GetService( id, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'service/'+ id, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_DeleteService( id, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.delete( 'service/'+ id, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_UpdateService( id, dataInput, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.put( 'service/'+ id, dataInput, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_AddService( dataInput, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.post( 'service', dataInput, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_GetSettingTypes( callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'setting_types', config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_DeleteSettingType( id, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.delete( 'setting_type/'+ id, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_GetSettingType( id, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'setting_type/'+ id, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_UpdateSettingType( id, dataInput, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.put( 'setting_type/'+ id, dataInput, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_AddSettingType( dataInput, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.post( 'setting_type', dataInput, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_GetSettings( callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'settings_all', config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_GetSetting( id, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.get( 'settingByAdmin/'+ id, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_DeleteSetting( id, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.delete( 'settingByAdmin/'+ id, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_AddSetting( dataInput, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.post( 'settingByAdmin', dataInput, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}

export async function API_UpdateSetting( id, dataInput, callback ){
  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },};
  await _API.put( 'settingByAdmin/'+ id, dataInput, config )
    .then( ( response ) => { sendResponse( response, callback, null ) } )
    .catch( ( error ) => { sendResponse( false, callback, error ) } );
}