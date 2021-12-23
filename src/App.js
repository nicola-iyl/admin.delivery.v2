import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider as AuthProvider } from "./context/AuthContext";
import { Provider as MessageProvider } from "./context/MessageContext";

import PrivateRoute from "./router/PrivateRoute";
import PublicRoute from "./router/PublicRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Shops from "./pages/Shops";

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <MessageProvider>
          <BrowserRouter>
            <Routes>
              <Route exac path="/login" element={<PublicRoute><Login /></PublicRoute>}/>

              <Route exac path="/"      element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
              <Route exac path="/users" element={<PrivateRoute><Users /></PrivateRoute>}/>
              <Route exac path="/shops" element={<PrivateRoute><Shops /></PrivateRoute>}/>
            </Routes>
          </BrowserRouter>
        </MessageProvider>        
      </AuthProvider>      
    </div>
  );
}

export default App;
