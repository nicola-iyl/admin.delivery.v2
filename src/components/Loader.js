import React from "react";
import "../assets/css/loader.css";

const Loader = () => {
  return (
    <div className="wrapperLoader">
      <div className="contentLoader">
        <div className="spinner-border text-muted"></div>
      </div>
    </div>
  );
};

export default Loader;
