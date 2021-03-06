import React from "react";
import { faSort} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SettingRow from "./rows/SettingRow";

const TableSettings = ({ settings, removeSetting, sortBy, sortBySettingType, sortByShop }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th role="button" onClick={ () => sortBy('id') }>
            Id <FontAwesomeIcon icon={ faSort } />
          </th>
          <th role="button" onClick={ () => sortByShop() }>
            Shop <FontAwesomeIcon icon={ faSort } />
          </th>
          <th role="button" onClick={ () => sortBySettingType() }>
            Configurazione <FontAwesomeIcon icon={ faSort } />
          </th>
          <th>Tipo</th>
          <th>
            Valore
          </th>
          <th></th>
          <th></th>
        </tr>        
      </thead>
      <tbody>
        { settings.map(( setting, i) => { return (
            <SettingRow 
              onRemoveHandler = { (id) => { removeSetting( id ) }} 
              key = { setting.id } 
              setting = { setting }
            />) 
            })
        }
      </tbody>
    </table>    
  );
}

export default TableSettings;