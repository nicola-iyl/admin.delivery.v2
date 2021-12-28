import React from "react";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SettingTypeRow = ( { settingType, onRemoveHandler } ) => {
  return (
    <tr>
      <td>{ settingType.id }</td>
      <td>{ settingType.name }</td>
      <td>{ settingType.type }</td>
      <td className="w-25">{ settingType.desc }</td>
      <td>{ settingType.service.label }</td>
      <td>
        <Link to={ "/setting_types?action=edit&id=" + settingType.id } className="btn btn-sm btn-primary">
          <FontAwesomeIcon icon = { faEdit } />
        </Link>        
      </td>
      <td>
        <button type="button" className="btn btn-sm btn-danger" onClick={() => { onRemoveHandler( settingType.id ) }} >
          <FontAwesomeIcon icon = { faTrash } /> 
        </button>
      </td>
    </tr>
  );
}

export default SettingTypeRow;