import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Register from "./Register";
import Login from "./Login";
import SuccessLogin from "./SuccessLogin";
import Navbar from "./Navbar";
import './App.css'

function App() {
  return (
    <div className="container-width">
      <h1 style={{ textAlign: 'center' }}>Reset Password through Email</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/successlogin" element={<SuccessLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
