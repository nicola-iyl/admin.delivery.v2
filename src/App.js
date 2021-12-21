import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider as AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./router/PrivateRoute";
import PublicRoute from "./router/PublicRoute";

import Login from "./pages/Login";

console.log('file_App.js')

function App() {
  console.log('App.js');
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exac path="/login"    element={<PublicRoute><Login /></PublicRoute>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>      
    </div>
  );
}

export default App;
