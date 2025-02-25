import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Register from "./Register";
import './App.css'

function App() {
  return (
    <div className="container-width">
      <h1 style={{ textAlign: 'center' }}>Reset Password through Email</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
