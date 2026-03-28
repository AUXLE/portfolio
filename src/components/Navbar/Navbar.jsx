import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>

        {/* Mobile Burger */}
        <button
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${open ? "show" : ""}`}>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
