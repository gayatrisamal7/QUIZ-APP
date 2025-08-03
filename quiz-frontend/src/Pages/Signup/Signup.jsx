import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";



const Signup = () => {
  return (
    <div className="form-container">
    <form className="register-form">
      <label>Email</label>
      <input type="email" name="email" />

      <label>Username</label>
      <input type="text" name="username" />

      <label>Password</label>
      <input type="password" name="password" />

      <label>Confirm Password</label>
      <input type="password" name="confirmPassword" />

      <label>Select your favourite venue (optional)</label>
      <select name="venue">
        <option value="">-- Select Venue --</option>
        <option value="venue1">Venue 1</option>
        <option value="venue2">Venue 2</option>
      </select>

      <div className="checkbox-group">
        <label>
          <input type="checkbox" /> Accept{" "}
          <a href="#">privacy policy</a>, and <a href="#">terms and conditions</a>
        </label>
      </div>

      <div className="checkbox-group">
        <label>
          <input type="checkbox" /> Receive email updates about live quizzes and
          other events?
        </label>
      </div>

      <div className="checkbox-group">
        <label>
          <input type="checkbox" /> Remember me?
        </label>
      </div>

      <button type="submit">Register & Login</button>
    </form>
  </div>
  );
};

export default Signup;
