import React from "react";
import { auth } from "../services/config";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function SignInFacebook() {
  let navigate = useNavigate();
  const provider = new FacebookAuthProvider();
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <button onClick={handleClick}>Sign in with Facebook</button>
    </>
  );
}
