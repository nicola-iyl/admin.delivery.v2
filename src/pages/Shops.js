import React from "react";
import { useLocation } from "react-router-dom";

import ShopsList from "./shops/ShopsList";
import AddShop from "./shops/AddShop";
import EditShop from "./shops/EditShop";

const Shops = () => {

  const query = new URLSearchParams( useLocation().search );
  const action = query.get('action');
  const id = query.get('id');

  // FORM NUOVO SHOP
  if( action === 'add' ){
    return (
      <AddShop />
    );    
  }
  // FORM MODIFICA
  else if( action === 'edit' ){
    return (
      <EditShop id = { id } />
    );  
  }
  // LISTA SHOPS
  else{
    return (
      <ShopsList />
    );    
  }
}

export default Shops;