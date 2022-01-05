import React, { useState } from "react";
import { faSort} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ShopRow from "./rows/ShopRow";
import Modal from "../components/Modal";
import ShopDetails from "../pages/shops/ShopDetails";
import ShopServices from "../pages/shops/ShopServices";

const TableShops = ({ shops, removeShop, sortBy, sortByType }) => {

  const [ activeShop, setActiveShop ] = useState(null);
  const [ showDetails, setShowDetails ] = useState(false);
  const [ showServices, setShowServices ] = useState(false);

  const setForDetails = (id) => {
    const item = shops.find( item => item.id === id);
    setActiveShop( item );
    setShowDetails( true );
  }

  const setForServices = (id) => {
    const item = shops.find( item => item.id === id);
    setActiveShop( item );
    setShowServices( true );
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
            <th className="text-center">Servizi</th>
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
                setForServices = { (id) => setForServices(id)}
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
      { showServices
       ? <Modal title="Servizi Shop" modal="modal-lg" onClose={() => setShowServices(false)}>
            { activeShop !== null ? <ShopServices  shop={ activeShop } />: null}
         </Modal> 
       : null
      }
    </>
    
  );
}

export default TableShops;