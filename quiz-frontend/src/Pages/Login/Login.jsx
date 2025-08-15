// src/Pages/Login/Login.jsx
import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../../firebase/firebase"; // keep this path same as in Signup.jsx

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const normalize = (s) => s?.trim() ?? "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setError("");
    setSuccess("");

    try {
      setLoading(true);

      // Respect "Remember me" like your Signup component
      await setPersistence(
        auth,
        rememberMe ? browserLocalPersistence : browserSessionPersistence
      );

      await signInWithEmailAndPassword(auth, normalize(email), password);

      // ✅ Redirect to Home immediately after successful login
      navigate("/", { replace: true });

      setPassword(""); // clear password field
    } catch (err) {
      console.error(err);
      const genericInvalid = "Email or password is incorrect.";
      // Cover both older and newer Firebase error codes
      const map = {
        "auth/invalid-credential": genericInvalid,
        "auth/wrong-password": genericInvalid,
        "auth/user-not-found": genericInvalid,
        "auth/invalid-email": "Please enter a valid email.",
        "auth/too-many-requests":
          "Too many attempts. Try again later or reset your password.",
      };
      setError(map[err?.code] || err?.message || "Failed to log in.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (loading) return;

    setError("");
    setSuccess("");

    try {
      setLoading(true);
      const target = normalize(email);
      if (!target) {
        setError('Enter your email above, then click "Forgot password?" again.');
        return;
      }
      await sendPasswordResetEmail(auth, target);
      setSuccess("Password reset email sent. Check your inbox.");
    } catch (err) {
      console.error(err);
      const map = {
        "auth/invalid-email": "Please enter a valid email.",
        "auth/user-not-found": "No account exists for that email.",
      };
      setError(map[err?.code] || err?.message || "Could not send reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} aria-busy={loading}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />

        <div className="remember-me">
          <input
            type="checkbox"
            id="remember"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            disabled={loading}
          />
          <label htmlFor="remember">Remember me?</label>
        </div>

        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? "Signing in..." : "Login"}
        </button>

        <button
          type="button"
          className="forgot-password"
          onClick={handleForgotPassword}
          disabled={loading}
          aria-label="Reset your password via email"
        >
          Forgot password?
        </button>

        <p aria-live="polite" style={{ marginTop: 12 }}>
          {error && <span style={{ color: "red" }}>{error}</span>}
          {success && <span style={{ color: "green" }}>{success}</span>}
        </p>
      </form>
    </div>
  );
};

export default Login;

