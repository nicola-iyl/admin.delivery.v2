import React from "react";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ServiceRow = ( { service, onRemoveHandler } ) => {
  return (
    <tr>
      <td>{ service.id }</td>
      <td>{ service.name }</td>
      <td>{ service.label }</td>
      <td className="w-25">{ service.desc }</td>
      <td className="text-center">€ { service.price }</td>
      <td>
        <Link to={ "/services?action=edit&id=" + service.id } className="btn btn-sm btn-primary">
          <FontAwesomeIcon icon = { faEdit } />
        </Link>        
      </td>
      <td>
        <button type="button" className="btn btn-sm btn-danger" onClick={() => { onRemoveHandler( service.id ) }} >
          <FontAwesomeIcon icon = { faTrash } /> 
        </button>
      </td>
    </tr>
  );
}

export default ServiceRow;