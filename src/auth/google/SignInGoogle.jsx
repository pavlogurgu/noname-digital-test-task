import React, { useEffect, useState } from "react";
import { auth, provider } from "../services/config";
import { signInWithPopup } from "firebase/auth";
import { Home } from "../../pages/Home";
import { useNavigate } from "react-router-dom";

export function SignInGoogle() {
  const [value, setValue] = useState("");
  let navigate = useNavigate();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/home");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);
  return (
    <>
      {value ? (
        <Home />
      ) : (
        <button onClick={handleClick}>Sign in with Google</button>
      )}
    </>
  );
}
