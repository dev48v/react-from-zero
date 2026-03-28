// ============================================================
// STEP 1 — App Entry Point
// ============================================================
// This is where React mounts your app into the HTML page.
// ReactDOM.createRoot → finds the <div id="root"> in index.html
// root.render → puts your <App /> component inside it
// StrictMode → enables extra warnings during development
// ============================================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
