import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="navbar">

      <Link to='/'><img src={assets.logo} className="logo" alt="Logo" /></Link>
      {/* <h1 className=''>QUANT</h1> */}
      
      {/* Navigation Links */}
      <ul className="nav-links">
        <NavLink to="/" className="nav-link">
          <p>HOME</p>
          <hr />
        </NavLink>

        <NavLink to="/collection" className="nav-link">
          <p>COLLECTION</p>
          <hr />
        </NavLink>

        <NavLink to="/about" className="nav-link">
          <p>ABOUT</p>
          <hr />
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          <p>CONTACT</p>
          <hr />
        </NavLink>
      </ul>

      <div className="nav-icons">
        {/* Search Icon */}
        <img
          src={assets.search_icon}
          className="icon"
          alt="Search"
        />

        {/* Profile Icon*/}
        <div className="profile-container">
          <img
            src={assets.profile_icon}
            className="icon"
            alt="Profile"
          />
          {/*Profile Dropdown Menu */}
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <p>My Profile</p>
              <p>Orders</p>
              <p>Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon*/}
        <Link to="/cart" className="cart-link">
          <img
            src={assets.cart_icon}
            className="cart-icon"
            alt="Cart"
          />
          <p className="cart-count">10</p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="menu-icon"
          alt="Menu"
        />
      </div>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${visible ? "sidebar-open" : ""}`}>
        <div className="sidebar-content">

          <div
            onClick={() => setVisible(false)}
            className="sidebar-back"
          >
            <img
              className="back-icon"
              src={assets.dropdown_icon}
              alt=""
            />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="sidebar-link"
            to="/"
          >
            HOME
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="sidebar-link"
            to="/collection">COLLECTION</NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="sidebar-link"
            to="/about">ABOUT</NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="sidebar-link"
            to="/contact"
          >
            CONTACT
          </NavLink>

        </div>
      </div>

    </div>
  );
};

export default Navbar;