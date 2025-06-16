// src/components/SubscribeBanner.jsx
import React from 'react';

export default function SubscribeBanner() {
  return (
    <section className="subscribe-banner container">
      <div className="text">
        <h2>Free book raffle: submit your email to enter!</h2>
        <form aria-label="Book raffle form">
          <input
            type="email"
            placeholder="Your email address"
            required
          />
          <button type="submit" className="btn-signup">
            Enter to Win
          </button>
        </form>
      </div>
      <div className="image">
        <img
  src="images/raffle.gif"
  alt="Stack of books with raffle ticke"
  className="subscribe-gif"
/>
      </div>
    </section>
  );
}
