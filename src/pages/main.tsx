import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
  </React.StrictMode>
);