import React from "react";
import { faSort} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserRow from "./rows/UserRow";

const TableUsers = ({users, removeUser, sortBy, sortByRole}) => {
  
  return (
    <table id="usersTable" className="table">
      <thead>
        <tr>
          <th role="button" onClick={() => sortBy('id')}>Id <FontAwesomeIcon icon={ faSort } /></th>
          <th role="button" onClick={() => sortBy('name')}>Nome <FontAwesomeIcon icon={ faSort } /></th>
          <th role="button" onClick={() => sortBy('email')}>Email <FontAwesomeIcon icon={ faSort } /></th>
          <th role="button" onClick={() => sortBy('password')}>Password <FontAwesomeIcon icon={ faSort } /></th>
          <th role="button" onClick={sortByRole}>Ruolo <FontAwesomeIcon icon={ faSort } /></th>
          <th role="button">Shop</th>
          <th>Azioni</th>
        </tr>
      </thead>
      <tbody>
        { users.map( ( user, i) => { return ( <UserRow onClickHandler={ ( id ) => { removeUser(id) }} key={ user.id } user={ user } /> ) } )}
      </tbody>
    </table>
  );
}

export default TableUsers;