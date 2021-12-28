/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  faAtom,
  faUser,
  faStore,
  faCogs,
  faTools
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context as AuthContext } from "../../context/AuthContext";
import SideMenuItem from "./SideMenuItem";
import SideToggleItem from "./SideToggleItem";
import SideSubMenuItem from "./SideSubMenuItem";

const Sidebar = () => {

  const { state } = useContext( AuthContext );
  
  return (
  <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div className="sb-sidenav-menu">
      <div className="nav">
        <SideMenuItem label="Dashboard" to="/" icon={<FontAwesomeIcon icon={ faAtom }/>} />

        <SideToggleItem label="Utenti" menu="userMenu" icon={ <FontAwesomeIcon icon={faUser}/> } />
        <SideSubMenuItem menu="userMenu">
            <Link className="nav-link" to="/users">Tutti</Link>
            <Link className="nav-link" to={ { pathname: '/users', search: '?action=add' } }>Nuovo</Link>
        </SideSubMenuItem>

        <SideToggleItem label="Shops" menu="shopsMenu" icon={ <FontAwesomeIcon icon={faStore}/> } />
        <SideSubMenuItem menu="shopsMenu">
            <Link className="nav-link" to="/shops">Tutti</Link>
            <Link className="nav-link" to={{ pathname: '/shops', search: '?action=add' }}>Nuovo</Link>
        </SideSubMenuItem>

        <SideToggleItem label="Servizi" menu="servicesMenu" icon={ <FontAwesomeIcon icon={faCogs}/> } />
        <SideSubMenuItem menu="servicesMenu">
            <Link className="nav-link" to="/services">Tutti</Link>
            <Link className="nav-link" to={{ pathname: '/services', search: '?action=add' }}>Nuovo</Link>
        </SideSubMenuItem>

        <SideToggleItem label="Configurazioni" menu="settingsMenu" icon={ <FontAwesomeIcon icon={faTools}/> } />
        <SideSubMenuItem menu="settingsMenu">
            <Link className="nav-link" to="/setting_types">Tipologie</Link>
            <Link className="nav-link" to="/settings">Settaggi</Link>
            
        </SideSubMenuItem>
      
      </div>
    </div>
    <div className="sb-sidenav-footer">
      <div className="small">Logged in as:</div>
      { state.username } 
    </div>
  </nav>
  );
};

export default Sidebar;
