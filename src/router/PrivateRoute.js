import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
console.log('file_PrivateRoute.js');

const PrivateRoute = ({children}) => {
    console.log('PrivateRoute');
    const {state} = useContext(AuthContext);
    console.log( state );
    return state.isAuth === true ? children : <Navigate to="/login" />
}

export default PrivateRoute;