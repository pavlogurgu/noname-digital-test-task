import React from "react";
import { useNavigate } from "react-router-dom";
export function SignInPhone() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/sign-in-phone");
  };
  return (
    <>
      <button onClick={handleClick}>Sign in with Phone</button>
    </>
  );
}

export default SignInPhone;
