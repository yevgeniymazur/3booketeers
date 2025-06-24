import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/');
  };

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

          {user ? (
            <Link to="/blog">Blog</Link>
          ) : (
            <div className="disabled-link-wrapper">
              <span className="disabled-link">Blog</span>
              <div className="tooltip">Please sign in to view</div>
            </div>
          )}

          <Link to="/search">Book Search</Link>

          {!user ? (
            <>
              <Link to="/signin">Sign In</Link>
              <Link to="/signup">
                <button className="btn-signup">Sign Up</button>
              </Link>
            </>
          ) : (
            <button onClick={handleSignOut} className="btn-signup">Sign Out</button>
          )}
        </nav>
      </div>
    </header>
  );
}
