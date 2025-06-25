import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Ribbons/Navbar';
import Footer from '../components/Ribbons/Footer';
import Minecraft from "../components/Minecraft"
import "../styles/styles.css";

ReactDOM.createRoot(document.getElementById('mc') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Minecraft />
    <Footer id="mc-footer"/>
  </React.StrictMode>
);