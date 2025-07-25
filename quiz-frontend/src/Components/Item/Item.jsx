import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = () => {
  return (
    <div className="item-container">
      <h2>"Learning never exhausts the mind—it only ignites it."</h2>
      <Link to="/signup" className="start-btn">START</Link>
    </div>
  );
};

export default Item;
