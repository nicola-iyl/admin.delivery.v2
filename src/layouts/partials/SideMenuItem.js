import React from "react";
import { Link } from "react-router-dom";

const SideMenuItem = ({ label, to, icon }) => {
  return(
    <Link className="nav-link" to={ to }>
      <div className="sb-nav-link-icon">
        { icon }
      </div>
      { label }
    </Link>
  );
}

export default SideMenuItem;