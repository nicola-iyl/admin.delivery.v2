import React from "react";
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserRow = ( { user, onClickHandler } ) => {

  return (
    <tr>
      <td>{ user.id }</td>
      <td>{ user.name }</td>
      <td>{ user.email }</td>
      <td>{ ( user.clearPassword !== null ? user.clearPassword.clear : '') }</td>
      <td>{ user.role.name }</td>
      <td>{ user.shop !== null ? user.shop.ragione_sociale : null }</td>
      <td>
        <button type="button" className="btn btn-sm btn-danger" onClick={() => { onClickHandler(user.id) }} >
          <FontAwesomeIcon icon={ faTrash } /> Elimina
        </button>
      </td>
    </tr>
  );
}

export default UserRow;