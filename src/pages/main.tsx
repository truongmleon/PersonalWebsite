import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Current from '../components/Current';
import Past from '../components/Past';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer'
import "../styles/styles.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
    <Current />
    <Past />
    <Carousel />
    <Footer />
  </React.StrictMode>
);