// src/components/SignUp.jsx

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Optionally update the user's display name
      if (name) {
        await updateProfile(userCredential.user, { displayName: name });
      }
      setSuccess("Sign up successful! Redirecting...");
      setTimeout(() => {
        navigate("/");
      }, 1500); // Redirect after 1.5 seconds
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="container auth-container">
      <h1>Sign Up</h1>
      <form aria-label="Sign up form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
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
        <button type="submit">Create Account</button>
        {error && <div className="error">{error}</div>}
        {success && <div className="success" style={{ color: "green", marginTop: "1rem" }}>{success}</div>}
      </form>
    </main>
  );
}