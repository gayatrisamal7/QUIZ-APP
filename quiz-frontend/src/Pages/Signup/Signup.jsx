// src/Pages/Signup/Signup.jsx
import React, { useState } from "react";
import "./Signup.css";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  GoogleAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTos, setAcceptTos] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const normalize = (s) => s?.trim() ?? "";

  // --- Email/Password Sign Up (auto signs in) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setError("");
    setSuccess("");

    if (!acceptTos) return setError("Please accept privacy policy and terms.");
    if (password !== confirmPassword) return setError("Passwords do not match.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");

    try {
      setLoading(true);

      await setPersistence(
        auth,
        rememberMe ? browserLocalPersistence : browserSessionPersistence
      );

      const cred = await createUserWithEmailAndPassword(
        auth,
        normalize(email),
        password
      );

      const name = normalize(userName);
      if (name) await updateProfile(cred.user, { displayName: name });

      setSuccess("User Registered & Signed In ✅");

      // reset form
      setUserName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAcceptTos(false);
      setRememberMe(false);
    } catch (err) {
      console.error(err);
      // friendlier messages
      const map = {
        "auth/email-already-in-use": "That email is already registered.",
        "auth/invalid-email": "Please enter a valid email.",
        "auth/weak-password": "Password is too weak.",
      };
      setError(map[err?.code] || err?.message || "Failed to register.");
    } finally {
      setLoading(false);
    }
  };

  // --- Google Sign-In (popup only) ---
  const handleGoogleSignIn = async () => {
    if (loading) return;

    setError("");
    setSuccess("");

    // optional: enforce TOS also for Google
    if (!acceptTos) return setError("Please accept privacy policy and terms.");

    try {
      setLoading(true);

      await setPersistence(
        auth,
        rememberMe ? browserLocalPersistence : browserSessionPersistence
      );

      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      const result = await signInWithPopup(auth, provider);
      setSuccess("Signed in with Google ✅");
      // result.user available here
    } catch (err) {
      console.error(err);

      // Handle common edge case: account exists with different provider
      if (err?.code === "auth/account-exists-with-different-credential" && err?.customData?.email) {
        try {
          const methods = await fetchSignInMethodsForEmail(auth, err.customData.email);
          setError(
            `This email is already linked to: ${methods.join(", ")}. ` +
            `Sign in using that method, then link Google from your profile.`
          );
          return;
        } catch (_) {
          // fall through to default
        }
      }

      const map = {
        "auth/popup-blocked": "Popup was blocked. Allow popups and try again.",
        "auth/popup-closed-by-user": "Popup closed before completing sign-in.",
        "auth/cancelled-popup-request": "Another sign-in is already in progress.",
        "auth/unauthorized-domain": "Domain is not authorized in Firebase.",
      };
      setError(map[err?.code] || err?.message || "Google sign-in failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            disabled={loading}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={loading}
          />

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={acceptTos}
                onChange={(e) => setAcceptTos(e.target.checked)}
                disabled={loading}
              />{" "}
              Accept <a href="#">privacy policy</a>, and{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={loading}
              />{" "}
              Remember me?
            </label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Register & Login"}
          </button>

          <div style={{ margin: "12px 0", textAlign: "center" }}>— or —</div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="google-btn"
            aria-label="Sign in with Google"
          >
            {loading ? "Please wait..." : "Continue with Google"}
          </button>

          <p aria-live="polite">
            {error && <span style={{ color: "red" }}>{error}</span>}
            {success && <span style={{ color: "white" }}>{success}</span>}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;


