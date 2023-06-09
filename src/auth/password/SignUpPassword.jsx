import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/config";

export function SignUpPassword() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        console.log(userCredential.user);
        navigate("/login-password");
      })
      .catch((err) => {
        if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
          setError("The password is too weak.");
        } else if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
          setError("The email address is already in use.");
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
        <h1>Sign Up</h1>
        <p>Fill the form below to create your account.</p>
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
          <button title="Sign up" aria-label="Signup" type="submit">
            Create account
          </button>
        </div>
      </form>
      <div className="option">
        <p>
          Already have an account?
          <Link to="/login-password">Sign in</Link>
        </p>
      </div>
      <p>
        <Link to={"/"}>Other methods</Link>
      </p>
    </div>
  );
}
export default SignUpPassword;
