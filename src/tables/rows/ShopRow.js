import React from "react";
import { faTrash, faSearch, faEdit} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ShopRow = ( { shop, setForDetails, onRemoveHandler } ) => {
  return (
    <tr>
      <td>{shop.id}</td>
      <td>{shop.ragione_sociale}</td>
      <td>{shop.shopType.name}</td>
      <td>{shop.insegna}</td>
      <td>{shop.citta}</td>
      <td>{shop.tel}</td>
      <td>{shop.email}</td>
      <td>{shop.status}</td>
      <td>
        <button onClick={() => { setForDetails(shop.id) } } type="button" className="btn btn-sm btn-primary" >
          <FontAwesomeIcon icon={ faSearch } />
        </button>        
      </td>
      <td>
        <Link to={ "/shops?action=edit&id="+shop.id } className="btn btn-sm btn-primary">
          <FontAwesomeIcon icon={ faEdit } />
        </Link>        
      </td>
      <td>
        <button onClick={() => { onRemoveHandler(shop.id) } } type="button" className="btn btn-sm btn-danger"  >
          <FontAwesomeIcon icon={ faTrash } />
        </button>
      </td>
    </tr>
  );
}

export default ShopRow;