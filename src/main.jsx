<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
// Swap BrowserRouter for HashRouter:
import { HashRouter } from 'react-router-dom';
import App from './App';

import './style.css';      

import { AuthProvider } from './context/AuthContext';
=======
// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './style.css'
import { AuthProvider } from './context/AuthContext'   // <-- make sure this path matches where you put AuthContext.jsx
>>>>>>> eb7dcc7039ba926cb278189848030ff12a3762c1

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AuthProvider>
  </React.StrictMode>
)
