import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>🌾 E-Farming (நமது விவசாயம்)</h1>
      </header>
      <marquee className="ticker">E-Farming (நமது விவசாயம்) - Empowering Farmers, Buyers, and Learners!</marquee>
      <div className="options">
        <Link to="/farmers" className="option">👨‍🌾 Farmers (விவசாயிகள்)</Link>
        <Link to="/buyers" className="option">🛒 Buyers (கொடுப்பவர்கள்)</Link>
        <Link to="/learners" className="option">📖 Learners (கற்கும் இடம்)</Link>
        <Link to="/guidance" className="option">🌱 Guidance (வழிகாட்டல்)</Link>
      </div>
    </div>
  );
}

export default Home;