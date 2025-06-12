import React from 'react';
import ReactDOM from 'react-dom/client';
// Swap BrowserRouter for HashRouter:
import { HashRouter } from 'react-router-dom';
import App from './App';

import './style.css';      


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
