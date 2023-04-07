import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./auth/Auth";
import { LoginPassword } from "./auth/password/LoginPassword";
import { SignUpPassword } from "./auth/password/SignUpPassword";
import { Home } from "./Home";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login-password" element={<LoginPassword />} />
      <Route path="/sign-up" element={<SignUpPassword />} />
    </Routes>
  </>
);

export default App;
