import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import Works from '../components/Works';
import "../styles/styles.css";

ReactDOM.createRoot(document.getElementById('works') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Works />
  </React.StrictMode>
);