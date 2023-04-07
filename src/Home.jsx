import React from "react";

import { useNavigate } from "react-router-dom";

export function Home() {
  let navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <h2>Заглушка</h2>
      <button onClick={logout}>Log out</button>
    </>
  );
}
