import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import UsersList from "./users/UsersList";
import AddUser from "./users/AddUser";

const Users = () => {

  const query = new URLSearchParams( useLocation().search );
  const action = query.get('action');

  // FORM REGISTRAZIONE
  if(action === 'add'){
    return (
      <AddUser />
    );    
  }
  // LISTA USERS
  else{
    return (
      <UsersList />
    );    
  }
  
}

export default Users;