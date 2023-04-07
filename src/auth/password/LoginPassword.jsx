import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/config";
import queryString from "query-string";

export function LoginPassword() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  let navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("logged in!");
        // Signed in
        navigate("/home");
      })
      .catch((err) => {
        if (
          err.code === AuthErrorCodes.INVALID_PASSWORD ||
          err.code === AuthErrorCodes.USER_DELETED
        ) {
          setError("The email address or password is incorrect");
        } else {
          console.log(err.code);
          alert(err.code);
        }
      });
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="form-body">
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Fill the form below to sign in to your account.</p>
        <div className="email-input">
          <input
            name="email"
            placeholder="Enter email"
            type="email"
            onChange={handleChange}
            value={input.email}
            required
            autoComplete="true"
          />
          <label htmlFor="email" className="label-name">
            <span className="content-name">Email</span>
          </label>
        </div>
        <div className="password-input">
          <input
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={input.password}
            type="password"
            required
            autoComplete="true"
          />
          <label htmlFor="password" className="label-name">
            <span className="content-name">Password</span>
          </label>
        </div>
        <div className="btn">
          {error ? <p className="login-error">{error}</p> : null}
          <button title="Login" aria-label="Login" type="submit">
            Login
          </button>
        </div>
      </form>
      <div className="option">
        <p>
          Don't have an account?
          <Link to={"/sign-up"}>Sign Up</Link>
        </p>
      </div>
      {query.length > 0 ? (
        <p>
          <Link to={"/"}>Other methods</Link>
        </p>
      ) : null}
    </div>
  );
}

export default LoginPassword;
