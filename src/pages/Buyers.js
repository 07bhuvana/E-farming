import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Buyers.css';

function Buyers() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState(() => {
    return JSON.parse(localStorage.getItem('purchaseHistory')) || [];
  });
  const [products, setProducts] = useState([]);

  // 🔹 Check if the user is logged in as a buyer
  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    const userRole = localStorage.getItem('userRole');
    
    if (!userLoggedIn || userRole !== 'buyer') {
      navigate('/login'); // Redirect unauthorized users
    }
  }, [navigate]);

  // 🔹 Load products & seeds from localStorage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('buyerProducts')) || [];
    const storedSeeds = JSON.parse(localStorage.getItem('buyerSeeds')) || [];

    // Products already have a quantity field; add "category" for seeds
    const formattedSeeds = storedSeeds.map(seed => ({
      ...seed,
      category: 'Seed'  // Assign a category to seeds explicitly
    }));

    setProducts([...storedProducts, ...formattedSeeds]);
  }, []);

  // 🔹 Function to add items to cart (prevent duplicates)
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.name === product.name);
    
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // 🔹 Function to checkout and save purchase history
  const checkout = () => {
    if (cart.length === 0) return;

    const updatedHistory = [...purchaseHistory, ...cart];
    setPurchaseHistory(updatedHistory);
    localStorage.setItem('purchaseHistory', JSON.stringify(updatedHistory));

    // Reduce product quantity in localStorage after purchase
    const updatedProducts = products.map((product) => {
      const cartItem = cart.find((item) => item.name === product.name);
      if (cartItem) {
        return { ...product, quantity: product.quantity - cartItem.quantity };
      }
      return product;
    });

    setProducts(updatedProducts);
    localStorage.setItem('buyerProducts', JSON.stringify(updatedProducts));

    setCart([]); // Clear cart after checkout
  };

  return (
    <div className="buyers-container">
      <h2>🛒 Buyers Section (வாங்குபவர்கள்)</h2>

      {/* 🔹 Available Products & Seeds */}
      <div className="products-list">
        <h3>Available Products & Seeds (கிடைக்கும் பொருட்கள் மற்றும் விதைகள்)</h3>
        {products.length === 0 ? (
          <p>No items available</p>
        ) : (
          products.map((product, index) => (
            <div key={index} className="product-item">
              <span>{product.name} ({product.category || 'Product'}) - ₹{product.price} ({product.quantity} left)</span>
              <button onClick={() => addToCart(product)} disabled={product.quantity <= 0}>
                {product.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          ))
        )}
      </div>

      {/* 🔹 Shopping Cart */}
      <div className="cart">
        <h3>🛍 Cart (வாங்கும் பொருட்கள்)</h3>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price} (x{item.quantity})
              </li>
            ))}
          </ul>
        )}
        <button onClick={checkout} disabled={cart.length === 0}>✅ Checkout</button>
      </div>

      {/* 🔹 Purchase History */}
      <div className="purchase-history">
        <h3>📜 Purchase History (வாங்கிய பொருட்கள்)</h3>
        {purchaseHistory.length === 0 ? (
          <p>No purchases yet</p>
        ) : (
          <ul>
            {purchaseHistory.map((item, index) => (
              <li key={index}>{item.name} - ₹{item.price} (x{item.quantity || 1})</li>
            ))}
          </ul>
        )}
      </div>

      <Link to="/" className="back-button">🔙 Back to Dashboard</Link>
    </div>
  );
}

export default Buyers;
