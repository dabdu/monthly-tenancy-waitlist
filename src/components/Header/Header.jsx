import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";


function Header() {
  return (
    <>
      <header className="header" >
        <Link to="/">
          <div className="logo__container">

          <img src={logo}  alt="" />
          </div>
        </Link>
        <nav className="header__navbar">
         
            <Link to="/">
              <li>Home</li>
           </Link>
          
          <Link to="/about">
            <li>About</li>
          </Link>
          
        </nav>
      </header>
    </>
  );
}

export default Header;
