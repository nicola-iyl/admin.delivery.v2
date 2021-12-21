import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { faBars, faUser, faSignOutAlt, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context as AuthContext } from "../../context/AuthContext";
import { API_Logout } from "../../api/AuthService";

const Navbar = () => {

  const { removeAuth } = useContext( AuthContext );

  const logoutSubmit = async ( e ) => {
    e.preventDefault();
    await API_Logout( ( data, message ) => {
      if( data ) { removeAuth() }
    } );
  }

  return (
  <nav className="sb-topnav navbar navbar-expand navbar-dark"  style={{ backgroundColor: '#cb4132' }}>
    <Link className="navbar-brand ps-3" to="/">
      Admin Delivery
    </Link>
    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
      <FontAwesomeIcon icon={faBars}/>
    </button>
    <ul className="navbar-nav ms-auto ms-auto me-3 me-lg-4">
      <li className="nav-item dropdown">
        <button className="btn nav-link dropdown-toggle" id="navbarDropdown" to="#" data-bs-toggle="dropdown" aria-expanded="false">
          <FontAwesomeIcon icon={faUser}/>
        </button>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
          <li>
            <Link className="dropdown-item" to="/profile"><FontAwesomeIcon icon={faInfoCircle}/>
              Profilo</Link>
          </li>
          <li>
            <hr className="dropdown-divider"/>
          </li>
          <li>
            <button type="button" className="dropdown-item" onClick={ ( e ) => logoutSubmit( e ) }>
              <FontAwesomeIcon icon={faSignOutAlt}/> Logout
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </nav>);
};

export default Navbar;
