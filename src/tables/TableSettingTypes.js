import React, { useState } from "react";
import { faSort} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SettingTypeRow from "./rows/SettingTypeRow";
import Modal from "../components/Modal";

const TableSettingTypes = ({ settingTypes, removeSettingType, sortBy, sortByService }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th role="button" onClick={ () => sortBy('id') }>
            Id <FontAwesomeIcon icon={ faSort } />
          </th>
          <th role="button" onClick={() => sortBy('name')}>
            Nome <FontAwesomeIcon icon={ faSort } />
          </th>
          <th role="button" onClick={() => sortBy('type')}>
            Tipo <FontAwesomeIcon icon={ faSort } />
          </th>
          <th>Descrizione</th>
          <th role="button" onClick={() => sortByService()}>
            Servizio <FontAwesomeIcon icon={ faSort } />
          </th>
          <th></th>
          <th></th>
        </tr>        
      </thead>
      <tbody>
        { settingTypes.map(( settingType, i) => { return (
            <SettingTypeRow 
              onRemoveHandler = { (id) => { removeSettingType(id) }} 
              key = { settingType.id } 
              settingType = { settingType }
            />) 
            })
        }
      </tbody>
    </table>    
  );
}

export default TableSettingTypes;