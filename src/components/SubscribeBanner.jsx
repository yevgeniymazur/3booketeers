// src/components/SubscribeBanner.jsx
import React, { useState } from 'react';

export default function SubscribeBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // simulate something happening
    setSubmitted(true);
  };

  return (
    <section className="subscribe-banner container">
      <div className="text">
        {!submitted ? (
          <>
            <h2>Free book raffle: submit your email to enter!</h2>
            <form aria-label="Book raffle form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-signup">
                Enter to Win
              </button>
            </form>
          </>
        ) : (
          <div className="thank-you">
            <h2>Thanks for entering!</h2>
            <p>You'll hear from us if you win 🎉</p>
          </div>
        )}
      </div>

      <div className="image">
        <img
          src="images/raffle.gif"
          alt="Stack of books with raffle ticket"
          className="subscribe-gif"
        />
      </div>
    </section>
  );
}
