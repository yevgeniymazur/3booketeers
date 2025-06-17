// src/components/SignIn.jsx

import { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [resetMsg, setResetMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("Sign in successful! Redirecting...");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePasswordReset = async () => {
    setResetMsg("");
    setError("");
    if (!email) {
      setError("Please enter your email above to reset your password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetMsg("Password reset email sent! Check your inbox.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="container auth-container">
      <h1>Sign In</h1>
      <form aria-label="Sign in form" onSubmit={handleSubmit}>
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
        <button type="submit">Sign In</button>
        <button
          type="button"
          style={{
            background: "none",
            color: "var(--clr-secondary)",
            border: "none",
            textDecoration: "underline",
            cursor: "pointer",
            marginLeft: "1rem"
          }}
          onClick={handlePasswordReset}
        >
          Forgot password?
        </button>
        {error && <div className="error">{error}</div>}
        {success && <div className="success" style={{ color: "green", marginTop: "1rem" }}>{success}</div>}
        {resetMsg && <div className="success" style={{ color: "green", marginTop: "1rem" }}>{resetMsg}</div>}
      </form>
    </main>
  );
}