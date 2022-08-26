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
                    Home
                  </NavLink>
                </li>
                <li className="btn__flex">
                  <NavLink to="">Product</NavLink>
                  <i class="fa-solid fa-angle-down icon__down"></i>
                  <ul className="dropdown__menu">
                    <li>
                      <Link to="/ecommerce" onClick={closeSideDrawer}>
                        E-Commerce
                      </Link>
                    </li>
                    <li>
                      <Link to="/officecrm" onClick={closeSideDrawer}>
                        Office ERM
                      </Link>
                    </li>
                    <li>
                      <Link to="/biohrm" onClick={closeSideDrawer}>
                        Biometric Based HRM
                      </Link>
                    </li>
                    <li>
                      <Link to="/minibank" onClick={closeSideDrawer}>
                        Mini Banking
                      </Link>
                    </li>
                    <li>
                      <Link to="/travelerp" onClick={closeSideDrawer}>
                        Travel ERP
                      </Link>
                    </li>
                    <li>
                      <Link to="/posbill" onClick={closeSideDrawer}>
                        POS On Billing
                      </Link>
                    </li>
                    <li>
                      <Link to="/goldloan" onClick={closeSideDrawer}>
                        Gold Loan Management
                      </Link>
                    </li>
                    <li>
                      <Link to="/medibill" onClick={closeSideDrawer}>
                        Medical Billing
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="drop__down btn__flex">
                  <NavLink to="">Services</NavLink>
                  <i class="fa-solid fa-angle-down icon__down"></i>
                  <ul className="dropdown__menu">
                    <li>
                      <Link to="/cutomize" onClick={closeSideDrawer}>
                        Customized Web
                      </Link>
                    </li>
                    <li>
                      <Link to="/webdesign" onClick={closeSideDrawer}>
                        Website Design And Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/webhosting" onClick={closeSideDrawer}>
                        Web Hosting
                      </Link>
                    </li>
                    <li>
                      <Link to="/androidapp" onClick={closeSideDrawer}>
                        Android Application Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/iosapp" onClick={closeSideDrawer}>
                        IOS Application Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/bulksms" onClick={closeSideDrawer}>
                        Bulk SMS
                      </Link>
                    </li>
                    <li>
                      <Link to="/crm" onClick={closeSideDrawer}>
                        CRM
                      </Link>
                    </li>
                    <li>
                      <Link to="/erp" onClick={closeSideDrawer}>
                        ERP
                      </Link>
                    </li>
                    <li>
                      <Link to="/hrm" onClick={closeSideDrawer}>
                        HRM
                      </Link>
                    </li>
                  </ul>
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
