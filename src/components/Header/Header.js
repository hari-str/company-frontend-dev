import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [icon, setIcon] = useState(false);

  const handleClick = () => {
    setIcon(!icon);
  };
  const closeSideDrawer = () => {
    setIcon(false);
  };
  return (
    <>
      <header>
        <nav className="header">
          <div className="header__container">
            <div className="header__logo container">
              <NavLink to="/">
                <img
                  src="https://www.kitkatsoftwaretechnologies.com/images/kitkat.jpg"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div
              className={
                icon
                  ? "header__list container active"
                  : "header__list container"
              }
            >
              <ul>
                <li>
                  <NavLink to="/" onClick={closeSideDrawer}>
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="" onClick={closeSideDrawer}>
                    Product
                    <i class="fa-solid fa-angle-down icon__down"></i>
                  </NavLink>
                  <ul className="dropdown__menu">
                    <li>
                      <Link to="/contact">E-Commerce</Link>
                    </li>
                    <li>
                      <Link to="/contact">Office ERM</Link>
                    </li>
                    <li>
                      <Link to="/contact">Biometric Based HRM</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/contact">Mini Banking</Link>
                    </li>
                    <li>
                      <Link to="/contact">Travel ERP</Link>
                    </li>
                    <li>
                      <Link to="/contact">POS On Billing</Link>
                    </li>
                    <li>
                      <Link to="/contact">Gold Loan Management</Link>
                    </li>
                    <li>
                      <Link to="/contact">Medical Billing</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="" onClick={closeSideDrawer}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={closeSideDrawer}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/career" onClick={closeSideDrawer}>
                    Career
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="active__link"
                    onClick={closeSideDrawer}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav__bar icon" onClick={handleClick}>
              {icon ? (
                <i class="fa-solid fa-xmark"></i>
              ) : (
                <i class="fa-solid fa-bars icon"></i>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
