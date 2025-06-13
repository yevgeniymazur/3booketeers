/*import React from 'react';

export default function SignUp() {
  return (
    <main className="container">
      <h1>Sign Up</h1>
      <form aria-label="Sign up form">
        <label>Name<input type="text" required/></label>
        <label>Email<input type="email" required/></label>
        <label>Password<input type="password" required/></label>
        <button type="submit">Create Account</button>
      </form>
    </main>
  );
}*/

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Account created! You can now sign in.");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="container">
      <h1>Sign Up</h1>
      <form aria-label="Sign up form" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {success && <div style={{ color: "green" }}>{success}</div>}
      </form>
    </main>
  );
}