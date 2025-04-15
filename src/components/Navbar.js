// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>🌾 E-Farming (நமது விவசாயம்) 🌿</h1>
      <ul>
        <li><Link to="/">🏡 Home</Link></li>
        <li><Link to="/farmers">🚜 Farmers (விவசாயிகள்)</Link></li>
        <li><Link to="/buyers">🛒 Buyers (கொடுக்குவோர்)</Link></li>
        <li><Link to="/learners">📚 Learners (கற்கும் இடம்)</Link></li>
        <li><Link to="/guidance">🌱 Guidance (வழிகாட்டல்)</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;