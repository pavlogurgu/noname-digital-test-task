import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./auth/Auth";
import { LoginPassword } from "./auth/password/LoginPassword";
import { SignUpPassword } from "./auth/password/SignUpPassword";
import { PhoneModal } from "./auth/phone/PhoneModal";
import { Users } from "./pages/Users";

import { Home } from "./pages/Home";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login-password" element={<LoginPassword />} />
      <Route path="/sign-up" element={<SignUpPassword />} />
      <Route path="/sign-in-phone" element={<PhoneModal />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </>
);

export default App;
