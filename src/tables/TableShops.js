import React, { useState } from "react";
import { faSort} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ShopRow from "./rows/ShopRow";
import Modal from "../components/Modal";
import ShopDetails from "../pages/shops/ShopDetails";

const TableShops = ({ shops, removeShop, sortBy, sortByType }) => {

  const [ activeShop, setActiveShop ] = useState(null);
  const [ showDetails, setShowDetails ] = useState(false);

  const setForDetails = (id) => {
    const item = shops.find( item => item.id === id);
    setActiveShop( item );
    setShowDetails( true );
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th role="button" onClick={ () => sortBy('id') }>
              Id <FontAwesomeIcon icon={ faSort } />
            </th>
            <th role="button" onClick={() => sortBy('ragione_sociale')}>
              Ragione Sociale <FontAwesomeIcon icon={ faSort } />
            </th>
            <th role="button" onClick={() => sortByType()}>
              Tipo <FontAwesomeIcon icon={ faSort } />
            </th>
            <th role="button" onClick={() => sortBy('insegna')}>
              Insegna <FontAwesomeIcon icon={ faSort } />
            </th>
            <th role="button" onClick={() => sortBy('citta')}>
              Città <FontAwesomeIcon icon={ faSort } />
            </th>
            <th>Tel</th>
            <th>Email</th>
            <th>Stato</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>        
        </thead>
        <tbody>
          { shops.map(( shop, i) => { return (
              <ShopRow 
                onRemoveHandler = { (id) => { removeShop(id) }} 
                setForDetails = { (id) => setForDetails(id)}
                key={shop.id} 
                shop={shop}
              />) 
              })
          }
        </tbody>
      </table>
      { showDetails 
       ? <Modal title="Dettaglio Shop" modal="modal-lg" onClose={() => setShowDetails(false)}>
            { activeShop !== null ? <ShopDetails  shop={ activeShop } />: null}
         </Modal> 
       : null
      }
    </>
    
  );
}

export default TableShops;