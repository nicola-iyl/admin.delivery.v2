import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ( { children } ) => {

  const { state } = useContext( AuthContext );
  return state.isAuth === true ? children : <Navigate to="/login" />
}

export default PrivateRoute;
