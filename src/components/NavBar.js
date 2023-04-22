import React from "react";
import "./NavBar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navigation">
      <Link to={"/"}>
        <div className="logo">
          <img src="./images/logo.jpg" alt="logo" />
        </div>
      </Link>
      <span>Deals</span>
      <span>Category</span>
      <div className="search_bar">
        <input type="text" placeholder="Search" className="search_box" />
        <span className="search_text">Search</span>
      </div>
      <AiOutlineShoppingCart className="cartIcon" />
      <button className="contact">Contact Us</button>
    </div>
  );
};

export default NavBar;
