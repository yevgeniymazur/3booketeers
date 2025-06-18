import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="header" role="banner">
      <div className="container header-content">
        <div className="logo" aria-label="Logo">
          <img src="images/logo.png" alt="3 Booketeers logo" />
          <span>The 3 Booketeers</span>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/bookclub">Book Club</Link>
          <Link to="/blog">Blog</Link>
          {user && <Link to="/search">Book Search</Link>}
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">
            <button className="btn-signup">Sign Up</button>
          </Link>
          {/* Show user name if logged in */}
          {user && (
            <span style={{ marginLeft: "1rem", fontWeight: "bold" }}>
              Hello, {user.displayName || user.email}
            </span>
          )}
        </nav>
      </div>
    </header>
  );
}