import React from "react";

const SideSubMenuItem = ({ children, menu }) => {
  return (
    <div className={localStorage.getItem( menu ) ? 'collapse show' : 'collapse'} id={ menu } aria-labelledby="headingOne">
      <nav className="sb-sidenav-menu-nested nav">
        { children }
      </nav>
    </div>
  );
}

export default SideSubMenuItem;