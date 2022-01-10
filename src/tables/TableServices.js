import React, { useState } from "react";
import { faSort} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceRow from "./rows/ServiceRow";
import ServiceSettings from "../pages/services/ServiceSettings";
import Modal from "../components/Modal";
//import { API_removeService } from "../api/services_service";

const TableServices = ( { services, removeService , sortBy } ) => {

  const [ activeService, setActiveService ] = useState(null);
  const [ showSettings, setShowSettings ] = useState(false);

  const setForSettings = (id) => {
    const item = services.find( item => item.id === id);
    setActiveService( item );
    setShowSettings( true );
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th role="button" onClick={ () => sortBy('id') }>Id <FontAwesomeIcon icon={ faSort } /></th>
            <th role="button" onClick={ () => sortBy('name') }>Nome <FontAwesomeIcon icon={ faSort } /></th>
            <th role="button" onClick={ () => sortBy('label') }>Label <FontAwesomeIcon icon={ faSort } /></th>
            <th className="w-25">Descrizione</th>
            <th className="text-center">Prezzo</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { services.map( ( service, i) => { return (
              <ServiceRow 
                onRemoveHandler = { (id) => { removeService(id) }} 
                setForSettings = { (id) => setForSettings(id)}
                key = { service.id } 
                service = { service }
              />) 
              })
          }
        </tbody>
      </table>
      { showSettings
       ? <Modal title="Configurazioni Servizio" modal="modal-lg" onClose={() => setShowSettings(false)}>
            { activeService !== null ? <ServiceSettings  service={ activeService } />: null}
         </Modal> 
       : null
      }
    </>    
  );
}

export default TableServices;