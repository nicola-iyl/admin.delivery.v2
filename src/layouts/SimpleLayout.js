import React from "react";

import "../assets/css/styles.css";

const SimpleLayout = (props) => {
  return (
    <div className="" style={{backgroundColor: '#021524'}}>
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>{ props.children }</main>
        </div>
      </div>
    </div>
  );
};

export default SimpleLayout;
