import React, { useState } from 'react';

export default function BookClub() {
  // form state
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [books, setBooks] = useState('');
  const [comment, setComment] = useState('');
  // list of clubs
  const [clubs, setClubs] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name) return; // require at least a name
    setClubs([
      ...clubs,
      { id: Date.now(), name, location, books, comment }
    ]);
    // clear form
    setName('');
    setLocation('');
    setBooks('');
    setComment('');
  };

  const handleDelete = (id) => {
    setClubs(clubs.filter(c => c.id !== id));
  };

  return (
    <main className="bookclub-container">
      <h1>Book Clubs</h1>

      <form className="club-form" onSubmit={handleAdd}>
        <label>
          Club Name
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Location
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </label>

        <label>
          Book Type(s)
          <input
            type="text"
            value={books}
            onChange={e => setBooks(e.target.value)}
            placeholder="e.g. Sci-fi, Mystery…"
          />
        </label>

        <label>
          Comment
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            rows="2"
          />
        </label>

        <button type="submit" className="btn-signup">
          {clubs.length ? 'Add Another Club' : 'Add Club'}
        </button>
      </form>

      <section className="club-list">
        {clubs.map(c => (
          <div key={c.id} className="club-card">
            <h3>{c.name}</h3>
            {c.location && <p><strong>Location:</strong> {c.location}</p>}
            {c.books && <p><strong>Books:</strong> {c.books}</p>}
            {c.comment && <p><em>"{c.comment}"</em></p>}
            <button onClick={() => handleDelete(c.id)} className="btn-delete">
              Remove
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
