import React, { useState, useEffect, useContext } from "react";

import MasterLayout from "../../layouts/MasterLayout";
import StandardPage from "../../layouts/StandardPage";
import TableUsers from "../../tables/TableUsers";
import { Context as MessageContext } from "../../context/MessageContext";
import { API_GetUsers, API_DeleteUser } from "../../api/AuthService";
import Loader from "../../components/Loader";
import { sort } from "../../utilities/sort";

const UsersList = () => {

  const [ users, setUsers ] = useState([]);
  const [ loading, setLoading ] = useState( true );
  const { addMessage, addError, resetAll } = useContext( MessageContext );

  useEffect( () => {
    getUsers();  
  },[]);

  const getUsers = async () => {
    await API_GetUsers( async(data, message) => {
      resetAll();
      if(data){
        setUsers( data.data.filter( (item) => item.id !== 1) ); //non faccio vedere l'utente con id 1 per sicurezza
      }      
      setLoading(false);
    });
  }

  const deleteUser = async (id) => {
    if(window.confirm("Sicuro ?")){
      API_DeleteUser(id, ( result, message ) => {
        if( result ){
          setUsers( users.filter( user => user.id !== id ) );
          addMessage( "Utente eliminato con successo" );
        }
        else{
          addError( message );
        }
      });
    } 
  }

  const sortByRole = () => {
    const copy = [...users];
    copy.sort((a, b) => (a.role.name > b.role.name) ? 1 : -1);
    setUsers(copy);
  }

  return (
    <MasterLayout>
      { loading ? <Loader /> : null }
      <StandardPage title="Utenti"> 
        <TableUsers 
          sortBy={(field) => sort( field, users, setUsers )} 
          sortByRole={ sortByRole } 
          removeUser={ (id) => { deleteUser(id) }} 
          users={ users }/>
      </StandardPage>
    </MasterLayout>
  );
}

export default UsersList;
