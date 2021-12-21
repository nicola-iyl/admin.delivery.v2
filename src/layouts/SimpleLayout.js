import React, { useContext } from "react";

import "../assets/css/styles.css";

//import { Context as MessageContext } from "../context/MessageContext";
//import Loader from "../components/Loader";
console.log('file_SimpleLayout.js')

const SimpleLayout = (props) => {

  console.log('SimpleLayout.js')
  //const { state } = useContext( MessageContext );

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
