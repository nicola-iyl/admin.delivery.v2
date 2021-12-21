import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ( { children } ) => {

  const { state } = useContext( AuthContext );
  return state.isAuth === false ? children : <Navigate to="/" />
}

export default PublicRoute;
