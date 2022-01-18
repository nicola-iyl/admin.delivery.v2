import React from "react";

import Navbar from "./partials/Navbar";
import Sidebar from "./partials/Sidebar";
import Footer from "./partials/Footer";

import "../assets/css/styles.css";

const MasterLayout = (props) => {
  
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            { props.children }
          </main>
          <Footer />
        </div>
      </div>
    </div>    
  );
};

export default MasterLayout;
