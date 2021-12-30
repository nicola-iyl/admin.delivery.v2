import React from "react";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SettingRow = ( { setting, onRemoveHandler } ) => {
  return (
    <tr>
      <td>{ setting.id }</td>
      <td>{ setting.shop.name }</td>
      <td>{ setting.settingType.name }</td>
      <td>{ setting.settingType.type }</td>
      <td>{ setting.value }</td>
      <td>
        <Link to={ "/setting?action=edit&id=" + setting.id } className="btn btn-sm btn-primary">
          <FontAwesomeIcon icon = { faEdit } />
        </Link>        
      </td>
      <td>
        <button type="button" className="btn btn-sm btn-danger" onClick={() => { onRemoveHandler( setting.id ) }} >
          <FontAwesomeIcon icon = { faTrash } /> 
        </button>
      </td>
    </tr>
  );
}

export default SettingRow;