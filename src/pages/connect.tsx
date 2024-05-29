import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import Connect from '../components/Connect';

ReactDOM.createRoot(document.getElementById('connect') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Connect />
  </React.StrictMode>
);