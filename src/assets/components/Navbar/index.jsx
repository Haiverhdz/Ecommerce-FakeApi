import Logo from "../../../assets/images/logo.svg";
import React from "react";
import CartWidget from "../CartWidget";
import Title from "../Title";
import NavbarList from "../NavbarList";
import "./styles.css";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar container">
          <div className="navbar-logo">
            <img className="logo" src={Logo} alt="" />
            <Title heading="h2" text="Haiver's Shop" />
          </div>
          <NavbarList className="header" label="Home" href="/" />
          <NavbarList className="header" label="Store" href="/store" />
          <NavbarList className="header" label={CartWidget()}  href="/cart" />
        </nav>
      </header>
    </>
  );
}

export default Navbar;
