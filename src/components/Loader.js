import React from "react";
import "../assets/css/loader.css";

console.log('file_Loader.js');

const Loader = () => {
  console.log('Loader.js');
  return (
    <div className="wrapperLoader">
      <div className="contentLoader">
        <div className="spinner-border text-muted"></div>
      </div>
    </div>
  );
};

export default Loader;
