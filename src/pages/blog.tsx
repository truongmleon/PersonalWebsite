import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import Blog from '../components/Blog';

ReactDOM.createRoot(document.getElementById('blog') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Blog />
  </React.StrictMode>
);