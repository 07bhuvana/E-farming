import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', age: '', role: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.role) {
      alert("Please select your role (Farmer or Buyer).");
      return;
    }

    // Store user data in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', formData.role);

    console.log('User Data:', formData);

    // Redirect based on role
    if (formData.role === 'farmer') {
      navigate('/farmers');
    } else if (formData.role === 'buyer') {
      navigate('/buyers');
    }
  };

  return (
  <div class="centered-container">
    <div className="login-container">
      <h2>🔑 Login / Register (உள்நுழைவு / பதிவு செய்யவும்)</h2>
      <form onSubmit={handleSubmit}>
        <label>👤 Name (பெயர்):</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>📧 Email (மின்னஞ்சல்) (Optional):</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>📞 Phone Number (தொலைபேசி எண்):</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>🎂 Age (வயது):</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />

        <label>🌱 Role (பங்கு):</label>
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="">Select Role</option>
          <option value="farmer">👨‍🌾 Farmer (விவசாயி)</option>
          <option value="buyer">🛒 Buyer (வாங்குபவர்)</option>
        </select>

        <button type="submit" className="submit-btn">Submit (சமர்ப்பிக்கவும்)</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
