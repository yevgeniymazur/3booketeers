import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Header     from './components/Header';
import Footer     from './components/Footer';
import Home       from './components/Home';
import BookClub   from './components/BookClub';
import Blog       from './components/Blog';
import SignIn     from './components/SignIn';
import SignUp     from './components/SignUp';
import BookSearch from './components/BookSearch'; // <-- Add this import

export default function App() {
  console.log("App component rendered");
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/"         element={<Home />}       />
          <Route path="/bookclub" element={<BookClub />}   />
          <Route path="/blog"     element={<Blog />}       />
          <Route path="/signin"   element={<SignIn />}     />
          <Route path="/signup"   element={<SignUp />}     />
          <Route path="/search"   element={<BookSearch />} /> {/* <-- Add this route */}

          {/* catch-all: redirect anything else back to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
