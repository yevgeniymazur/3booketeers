import React from 'react';
import ReactDOM from 'react-dom/client';
// Swap BrowserRouter for HashRouter:
import { HashRouter } from 'react-router-dom';
import App from './App';

import './style.css';      

import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AuthProvider>
  </React.StrictMode>
);
