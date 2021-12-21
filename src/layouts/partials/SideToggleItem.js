/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideToggleItem = ({ label, menu ,icon }) => {

  const toggleSubMenu = ( submenu ) => {
    localStorage.getItem( submenu ) ? localStorage.removeItem( submenu ) : localStorage.setItem( submenu, true );
  }

  return (
    <a onClick={ () => { toggleSubMenu( menu ) } } className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target={ "#" + menu } aria-expanded="false" aria-controls={ menu } >
      <div className="sb-nav-link-icon">
        { icon }
      </div>
      { label }
      <div className="sb-sidenav-collapse-arrow"><FontAwesomeIcon icon={faAngleDown}/></div>
    </a>
  );
}

export default SideToggleItem;