import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { faAtom, faUser, faAngleDown, faStore, faCogs, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Context as AuthContext} from "../context/AuthContext";

const Sidebar = () => {

  const toggleSubMenu = (submenu) => {
    localStorage.getItem(submenu) ? localStorage.removeItem(submenu) : localStorage.setItem(submenu,true);
  }

  const { state } = useContext(AuthContext);
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <Link className="nav-link" to="/">
            <div className="sb-nav-link-icon">
              <FontAwesomeIcon icon={ faAtom } />
            </div>
            Dashboard
          </Link>
          <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#userMenu" aria-expanded="false" aria-controls="userMenu" onClick={() => {toggleSubMenu('userMenu')}}>
            <div className="sb-nav-link-icon">
              <FontAwesomeIcon icon={ faUser } />
            </div>
            Utenti
            <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={ faAngleDown } /></div>
          </a>
          <div className={localStorage.getItem('userMenu') ? 'collapse show' : 'collapse'} id="userMenu" aria-labelledby="headingOne" >
            <nav className="sb-sidenav-menu-nested nav">
              <Link className="nav-link" to="/users">Tutti</Link>
              <Link className="nav-link" to="/register">Registra</Link>
            </nav>
          </div>
          <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#shopsMenu" aria-expanded="false" aria-controls="shopsMenu" onClick={() => {toggleSubMenu('shopsMenu')}}>
            <div className="sb-nav-link-icon">
              <FontAwesomeIcon icon={ faStore } />
            </div>
            Shops
            <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={ faAngleDown } /></div>
          </a>
          <div className={localStorage.getItem('shopsMenu') ? 'collapse show' : 'collapse'} id="shopsMenu" aria-labelledby="headingOne">
            <nav className="sb-sidenav-menu-nested nav">
              <Link className="nav-link" to="/shops">Tutti</Link>
              <Link className="nav-link" to={{pathname:'/shops', search:'?action=add'}}>Nuovo</Link>
            </nav>
          </div>
          <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#servicesMenu" aria-expanded="false" aria-controls="servicesMenu" onClick={() => {toggleSubMenu('servicesMenu')}}>
            <div className="sb-nav-link-icon">
              <FontAwesomeIcon icon={ faCogs } />
            </div>
            Servizi
            <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={ faAngleDown } /></div>
          </a>
          <div className={localStorage.getItem('servicesMenu') ? 'collapse show' : 'collapse'} id="servicesMenu" aria-labelledby="headingOne">
            <nav className="sb-sidenav-menu-nested nav">
              <Link className="nav-link" to="/services">Tutti</Link>
              <Link className="nav-link" to={{pathname:'/services', search:'?action=add'}}>Nuovo</Link>
            </nav>
          </div>
          <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#settingsMenu" aria-expanded="false" aria-controls="settingsMenu" onClick={() => {toggleSubMenu('settingsMenu')}}>
            <div className="sb-nav-link-icon">
              <FontAwesomeIcon icon={ faTools } />
            </div>
            Configurazioni
            <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={ faAngleDown } /></div>
          </a>
          <div className={localStorage.getItem('settingsMenu') ? 'collapse show' : 'collapse'} id="settingsMenu" aria-labelledby="headingOne">
            <nav className="sb-sidenav-menu-nested nav">
              <Link className="nav-link" to="/settings">Tutte</Link>
              <Link className="nav-link" to="/setting_types">Tipi</Link>
              <Link className="nav-link" to={{pathname:'/settings', search:'?action=add'}}>Nuovo</Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        {state.username}
      </div>
    </nav>
  );
};

export default Sidebar;
