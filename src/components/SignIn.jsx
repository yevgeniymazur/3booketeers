/*import React from 'react';

export default function SignIn() {
  return (
    <main className="container">
      <h1>Sign In</h1>
      <form aria-label="Sign in form">
        <label>Email<input type="email" required/></label>
        <label>Password<input type="password" required/></label>
        <button type="submit">Sign In</button>
      </form>
    </main>
  );
}*/

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Optionally redirect or show success message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Sign Up</button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default SignUp;