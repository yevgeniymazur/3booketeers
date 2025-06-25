// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-content">
        <p>© 2025 The 3 Booketeers</p>
        <div className="social" aria-label="Social links">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FB
          </a>
          <a
            href="https://x.com/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IG
          </a>
        </div>
      </div>
    </footer>
  );
}
