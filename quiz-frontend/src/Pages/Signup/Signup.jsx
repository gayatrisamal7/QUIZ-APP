// src/Pages/Signup/Signup.jsx
import React, { useState } from "react";
import "./Signup.css";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // clear any previous messages
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      console.log("User Registered Successfully");

      // show success in UI
      setSuccess("User Registered Successfully ✅");

      // optionally clear the form or navigate
      setUserName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error(err);
      setError(err.message); // e.g., auth/email-already-in-use
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
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Accept{" "}
              <a href="#">privacy policy</a>, and{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>

          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Receive email updates about live quizzes
              and other events?
            </label>
          </div>

          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Remember me?
            </label>
          </div>

          <button type="submit">Register &amp; Login</button>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "white" }}>{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;

