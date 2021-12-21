import React, {useContext} from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
console.log('file_PublicRoute.js');

const PublicRoute = ({children}) => {
    console.log('PublicRoute.js');
    const { state } = useContext(AuthContext);
    console.log( state );
    return state.isAuth === false ? children : <Navigate to="/" />
}

export default PublicRoute;