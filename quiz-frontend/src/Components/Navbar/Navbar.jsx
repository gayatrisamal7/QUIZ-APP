// src/Components/Navbar/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import new_quiz from "../Assets/new_quiz.jpeg";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

// Get a nice short name: use first word of displayName, or leading letters of email
const getDisplayName = (user) => {
  const fromProfile = user?.displayName?.trim();
  if (fromProfile) return fromProfile.split(" ")[0];

  const fromEmail = (user?.email || "").split("@")[0];
  const leadingLetters = fromEmail.match(/^[A-Za-z]+/);
  return leadingLetters ? leadingLetters[0] : (fromEmail || "User");
};

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false); // avoid flicker
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
      setAuthReady(true);
    });
    return unsub;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (e) {
      console.error(e);
    }
  };

  const name = getDisplayName(user);
  const initial = (name || "U").slice(0, 1).toUpperCase();

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={new_quiz} alt="" />
        </Link>
      </div>

      <div className="navbar-buttons">
        {!authReady ? null : !user ? (
          <>
            <Link to="/signup">
              <button className="btn dark">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="btn yellow">Login</button>
            </Link>
          </>
        ) : (
          <>
            {/* Keep existing class names exactly */}
            <button className="btn yellow" type="button">
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  marginRight: 8,
                }}
              >
                {initial}
              </span>
              {name}
            </button>

            <button className="btn dark" type="button" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

