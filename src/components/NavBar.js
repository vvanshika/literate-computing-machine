import React, { useState } from "react";
import { Link } from "react-router-dom";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import MenuIcon from "@material-ui/icons/Menu";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="navbar__brand">
        <span>PORT</span>FOLIO
      </h1>
      <MenuIcon
        className="navbar__menu"
        onClick={() => setIsMenuOpen(true)}
        style={{ fontSize: "medium" }}
      />
      <div
        className="navbar__links"
        style={{
          width: isMenuOpen ? (window.screen.width < 800 ? '100vw' : '30vw') : "0",
          transitionDelay: isMenuOpen ? "0.3s" : "0",
        }}
      >
        <HighlightOffIcon
          className="navbar__close"
          onClick={() => setIsMenuOpen(false)}
          style={{ fontSize: "30px" }}
        />
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          style={{ opacity: isMenuOpen ? "1" : "0" }}
        >
          <span className="navbar__link-main">HOME</span>
          <span className="navbar__link-side">the journey</span>
        </Link>
        <Link
          to="/about"
          onClick={() => setIsMenuOpen(false)}
          style={{ opacity: isMenuOpen ? "1" : "0" }}
        >
          <span className="navbar__link-main">ABOUT</span>
          <span className="navbar__link-side">know me better</span>
        </Link>
        <Link
          to="/work"
          onClick={() => setIsMenuOpen(false)}
          style={{ opacity: isMenuOpen ? "1" : "0" }}
        >
          <span className="navbar__link-main">WORK</span>
          <span className="navbar__link-side">check out my works</span>
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          style={{ opacity: isMenuOpen ? "1" : "0" }}
        >
          <span className="navbar__link-main">CONTACT</span>
          <span className="navbar__link-side">just say hello</span>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
