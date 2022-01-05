import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ShopServices = ( { shop } ) => {
  return(
    <div>
      <div>
        <Link to={ "/shops?action=addServiceToShop&id=" + shop.id } className="btn btn-sm btn-primary">
          <FontAwesomeIcon icon={ faPlus } /> Aggiungi Servizio
        </Link>
      </div>
      { shop.services.map(( service, i) => { return (
        <ul className="list-group list-group-horizontal mb-1">
          <li className="list-group-item w-50"><strong>{ service.label }</strong>:</li>
        </ul>   
      ); }) }
      
    </div>
  );
}

export default ShopServices;