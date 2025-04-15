import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Farmers.css';

function Farmers() {
  const navigate = useNavigate();

  // Check if user is logged in and has 'farmer' role
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = localStorage.getItem('userRole');
    if (!isLoggedIn || userRole !== 'farmer') {
      alert('You must be logged in as a farmer to access this page.');
      navigate('/login');
    }
  }, [navigate]);

  // -------------------------------
  // 1) PRODUCT LISTS
  // -------------------------------
  // 15 Vegetables
  const vegetableList = [
    { name: 'Tomato', price: 10 },
    { name: 'Potato', price: 15, image: '/images/potato.jpg' },
    { name: 'Onion', price: 12, image: '/images/onion.jpg' },
    { name: 'Carrot', price: 8, image: '/images/carrot.jpg' },
    { name: 'Cabbage', price: 15, image: '/images/cabbage.jpg' },
    { name: 'Cauliflower', price: 20, image: '/images/cauliflower.jpg' },
    { name: 'Spinach', price: 5, image: '/images/spinach.jpg' },
    { name: 'Eggplant', price: 18, image: '/images/eggplant.jpg' },
    { name: 'Broccoli', price: 25, image: '/images/broccoli.jpg' },
    { name: 'Beans', price: 10, image: '/images/beans.jpg' },
    { name: 'Capsicum', price: 15, image: '/images/capsicum.jpg' },
    { name: 'Pumpkin', price: 20, image: '/images/pumpkin.jpg' },
    { name: 'Lettuce', price: 10, image: '/images/lettuce.jpg' },
    { name: 'Beetroot', price: 12, image: '/images/beetroot.jpg' },
    { name: 'Radish', price: 10, image: '/images/radish.jpg' }
  ];

  // 15 Fruits
  const fruitList = [
    { name: 'Apple', price: 30, image: 'public/images/apple.jpeg' },
    { name: 'Banana', price: 5, image: '/images/banana.jpg' },
    { name: 'Orange', price: 20, image: '/images/orange.jpg' },
    { name: 'Mango', price: 25, image: '/images/mango.jpg' },
    { name: 'Grapes', price: 35, image: '/images/grapes.jpg' },
    { name: 'Pineapple', price: 40, image: '/images/pineapple.jpg' },
    { name: 'Watermelon', price: 30, image: '/images/watermelon.jpg' },
    { name: 'Strawberry', price: 50, image: '/images/strawberry.jpg' },
    { name: 'Papaya', price: 15, image: '/images/papaya.jpg' },
    { name: 'Guava', price: 10, image: '/images/guava.jpg' },
    { name: 'Peach', price: 20, image: '/images/peach.jpg' },
    { name: 'Pear', price: 25, image: '/images/pear.jpg' },
    { name: 'Plum', price: 18, image: '/images/plum.jpg' },
    { name: 'Kiwi', price: 25, image: '/images/kiwi.jpg' },
    { name: 'Cherry', price: 40, image: '/images/cherry.jpg' }
  ];

  // 15 Seeds
  const seedList = [
    { name: 'Wheat Seeds', price: 50, image: '/images/wheat_seeds.jpg' },
    { name: 'Rice Seeds', price: 45, image: '/images/rice_seeds.jpg' },
    { name: 'Maize Seeds', price: 40, image: '/images/maize_seeds.jpg' },
    { name: 'Sunflower Seeds', price: 60, image: '/images/sunflower_seeds.jpg' },
    { name: 'Sesame Seeds', price: 55, image: '/images/sesame_seeds.jpg' },
    { name: 'Mustard Seeds', price: 20, image: '/images/mustard_seeds.jpg' },
    { name: 'Groundnut Seeds', price: 35, image: '/images/groundnut_seeds.jpg' },
    { name: 'Soybean Seeds', price: 30, image: '/images/soybean_seeds.jpg' },
    { name: 'Cotton Seeds', price: 70, image: '/images/cotton_seeds.jpg' },
    { name: 'Barley Seeds', price: 25, image: '/images/barley_seeds.jpg' },
    { name: 'Millet Seeds', price: 28, image: '/images/millet_seeds.jpg' },
    { name: 'Sorghum Seeds', price: 22, image: '/images/sorghum_seeds.jpg' },
    { name: 'Tomato Seeds', price: 15, image: '/images/tomato_seeds.jpg' },
    { name: 'Chili Seeds', price: 15, image: '/images/chili_seeds.jpg' },
    { name: 'Cucumber Seeds', price: 18, image: '/images/cucumber_seeds.jpg' }
  ];

  // 15 Pesticides
  const pesticideList = [
    { name: 'Neem Oil', price: 50, image: '/images/neem_oil.jpg' },
    { name: 'Pyrethrin Spray', price: 60, image: '/images/pyrethrin_spray.jpg' },
    { name: 'Copper Fungicide', price: 45, image: '/images/copper_fungicide.jpg' },
    { name: 'Sulfur Powder', price: 35, image: '/images/sulfur_powder.jpg' },
    { name: 'Bacillus Thuringiensis', price: 70, image: '/images/bacillus_thuringiensis.jpg' },
    { name: 'Insecticidal Soap', price: 40, image: '/images/insecticidal_soap.jpg' },
    { name: 'Horticultural Oil', price: 55, image: '/images/horticultural_oil.jpg' },
    { name: 'Spinosad', price: 65, image: '/images/spinosad.jpg' },
    { name: 'Diatomaceous Earth', price: 30, image: '/images/diatomaceous_earth.jpg' },
    { name: 'Bordeaux Mixture', price: 50, image: '/images/bordeaux_mixture.jpg' },
    { name: 'Garlic Extract', price: 25, image: '/images/garlic_extract.jpg' },
    { name: 'Neem Cake', price: 45, image: '/images/neem_cake.jpg' },
    { name: 'Bio-Pesticide X', price: 55, image: '/images/bio_pesticide_x.jpg' },
    { name: 'Fungicide Y', price: 60, image: '/images/fungicide_y.jpg' },
    { name: 'Insect Trap Z', price: 35, image: '/images/insect_trap_z.jpg' }
  ];

  // -------------------------------
  // 2) QUANTITY STATES
  // -------------------------------
  const [vegetableQuantities, setVegetableQuantities] = useState(
    vegetableList.map(item => ({ ...item, quantity: 0 }))
  );
  const [fruitQuantities, setFruitQuantities] = useState(
    fruitList.map(item => ({ ...item, quantity: 0 }))
  );
  const [seedQuantities, setSeedQuantities] = useState(
    seedList.map(item => ({ ...item, quantity: 0 }))
  );
  const [pesticideQuantities, setPesticideQuantities] = useState(
    pesticideList.map(item => ({ ...item, quantity: 0 }))
  );

  // -------------------------------
  // 3) PRODUCTS & PURCHASE HISTORY
  // -------------------------------
  const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem('products')) || []);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [customers, setCustomers] = useState([]);

  // On mount, calculate total earnings & customers from purchaseHistory
  useEffect(() => {
    const purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    let earnings = 0;
    const buyers = {};

    purchaseHistory.forEach((purchase) => {
      const qty = parseInt(purchase.quantity || 1, 10);
      const price = parseFloat(purchase.price);
      earnings += price * qty;

      if (!buyers[purchase.buyer]) {
        buyers[purchase.buyer] = { name: purchase.buyer, items: [] };
      }
      buyers[purchase.buyer].items.push(`${purchase.name} - ${qty} units`);
    });

    setTotalEarnings(earnings);
    setCustomers(Object.values(buyers));
  }, []);

  // -------------------------------
  // 4) HANDLERS FOR + / - QUANTITY
  // -------------------------------
  // Vegetables
  const incrementVeg = (index) => {
    setVegetableQuantities(prev => {
      const updated = [...prev];
      updated[index].quantity = updated[index].quantity + 1;
      return updated;
    });
  };

  const decrementVeg = (index) => {
    setVegetableQuantities(prev => {
      const updated = [...prev];
      if (updated[index].quantity > 0) {
        updated[index].quantity = updated[index].quantity - 1;
      }
      return updated;
    });
  };

  // Fruits
  const incrementFruit = (index) => {
    setFruitQuantities(prev => {
      const updated = [...prev];
      updated[index].quantity = updated[index].quantity + 1;
      return updated;
    });
  };

  const decrementFruit = (index) => {
    setFruitQuantities(prev => {
      const updated = [...prev];
      if (updated[index].quantity > 0) {
        updated[index].quantity = updated[index].quantity - 1;
      }
      return updated;
    });
  };

  // Seeds
  const incrementSeed = (index) => {
    setSeedQuantities(prev => {
      const updated = [...prev];
      updated[index].quantity = updated[index].quantity + 1;
      return updated;
    });
  };

  const decrementSeed = (index) => {
    setSeedQuantities(prev => {
      const updated = [...prev];
      if (updated[index].quantity > 0) {
        updated[index].quantity = updated[index].quantity - 1;
      }
      return updated;
    });
  };

  // Pesticides
  const incrementPesticide = (index) => {
    setPesticideQuantities(prev => {
      const updated = [...prev];
      updated[index].quantity = updated[index].quantity + 1;
      return updated;
    });
  };

  const decrementPesticide = (index) => {
    setPesticideQuantities(prev => {
      const updated = [...prev];
      if (updated[index].quantity > 0) {
        updated[index].quantity = updated[index].quantity - 1;
      }
      return updated;
    });
  };

  // -------------------------------
  // 5) ADD TO PRODUCTS (Fix: Always add exactly 1 unit)
  // -------------------------------
  const addToProducts = (item, index, category) => {
    // Always add exactly 1 unit per click
    const existingIndex = products.findIndex(prod => prod.name === item.name);
    let updatedProducts = [];
    if (existingIndex !== -1) {
      updatedProducts = products.map((prod, idx) =>
        idx === existingIndex ? { ...prod, quantity: prod.quantity + 1 } : prod
      );
    } else {
      const newProduct = {
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image,
        category: category
      };
      updatedProducts = [...products, newProduct];
    }
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    localStorage.setItem('buyerProducts', JSON.stringify(updatedProducts));

    // Reset the displayed quantity for the item in its category
    if (category === 'vegetables') {
      const updated = [...vegetableQuantities];
      updated[index].quantity = 0;
      setVegetableQuantities(updated);
    } else if (category === 'fruits') {
      const updated = [...fruitQuantities];
      updated[index].quantity = 0;
      setFruitQuantities(updated);
    } else if (category === 'seeds') {
      const updated = [...seedQuantities];
      updated[index].quantity = 0;
      setSeedQuantities(updated);
    } else if (category === 'pesticides') {
      const updated = [...pesticideQuantities];
      updated[index].quantity = 0;
      setPesticideQuantities(updated);
    }
  };

  // -------------------------------
  // 6) CATEGORY SELECTION
  // -------------------------------
  const [selectedCategory, setSelectedCategory] = useState('vegetables');

  // -------------------------------
  // RENDER
  // -------------------------------
  return (
    <div className="farmers-container">
      <h2>👨‍🌾 Farmers Section</h2>

      {/* Category Selection */}
      <div className="category-buttons">
        <button
          className={selectedCategory === 'vegetables' ? 'active' : ''}
          onClick={() => setSelectedCategory('vegetables')}
        >
          Vegetables
        </button>
        <button
          className={selectedCategory === 'fruits' ? 'active' : ''}
          onClick={() => setSelectedCategory('fruits')}
        >
          Fruits
        </button>
        <button
          className={selectedCategory === 'seeds' ? 'active' : ''}
          onClick={() => setSelectedCategory('seeds')}
        >
          Seeds
        </button>
        <button
          className={selectedCategory === 'pesticides' ? 'active' : ''}
          onClick={() => setSelectedCategory('pesticides')}
        >
          Pesticides
        </button>
      </div>

      {/* Display Items Based on Selected Category */}
      {selectedCategory === 'vegetables' && (
        <div className="form-section">
          <h3>🥕 Add Vegetables</h3>
          <div className="item-list">
            {vegetableQuantities.map((item, index) => (
              <div key={item.name} className="item-card">
                <img src={item.image} alt={item.name} width="60" height="60" />
                <div className="item-info">
                  <strong>{item.name}</strong> - ₹{item.price}
                </div>
                <div className="quantity-controls">
                  <button onClick={() => decrementVeg(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementVeg(index)}>+</button>
                </div>
                <button className="add-btn" onClick={() => addToProducts(item, index, 'vegetables')}>
                  ➕ Add
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedCategory === 'fruits' && (
        <div className="form-section">
          <h3>🍎 Add Fruits</h3>
          <div className="item-list">
            {fruitQuantities.map((item, index) => (
              <div key={item.name} className="item-card">
                <img src={item.image} alt={item.name} width="60" height="60" />
                <div className="item-info">
                  <strong>{item.name}</strong> - ₹{item.price}
                </div>
                <div className="quantity-controls">
                  <button onClick={() => decrementFruit(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementFruit(index)}>+</button>
                </div>
                <button className="add-btn" onClick={() => addToProducts(item, index, 'fruits')}>
                  ➕ Add
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedCategory === 'seeds' && (
        <div className="form-section">
          <h3>🌱 Add Seeds</h3>
          <div className="item-list">
            {seedQuantities.map((item, index) => (
              <div key={item.name} className="item-card">
                <img src={item.image} alt={item.name} width="60" height="60" />
                <div className="item-info">
                  <strong>{item.name}</strong> - ₹{item.price}
                </div>
                <div className="quantity-controls">
                  <button onClick={() => decrementSeed(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementSeed(index)}>+</button>
                </div>
                <button className="add-btn" onClick={() => addToProducts(item, index, 'seeds')}>
                  ➕ Add
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedCategory === 'pesticides' && (
        <div className="form-section">
          <h3>🦟 Add Pesticides</h3>
          <div className="item-list">
            {pesticideQuantities.map((item, index) => (
              <div key={item.name} className="item-card">
                <img src={item.image} alt={item.name} width="60" height="60" />
                <div className="item-info">
                  <strong>{item.name}</strong> - ₹{item.price}
                </div>
                <div className="quantity-controls">
                  <button onClick={() => decrementPesticide(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementPesticide(index)}>+</button>
                </div>
                <button className="add-btn" onClick={() => addToProducts(item, index, 'pesticides')}>
                  ➕ Add
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------- DISPLAY PRODUCTS ---------- */}
      <div className="display-section">
        <h3>📦 Products Added</h3>
        {products.length === 0 ? (
          <p>No products added</p>
        ) : (
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '50px', height: '50px', marginRight: '8px' }}
                  />
                )}
                {product.name} - {product.quantity} units - ₹{product.price}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ---------- EARNINGS ---------- */}
      <div className="earnings-section">
        <h3>💰 Total Earnings: ₹{totalEarnings}</h3>
      </div>

      {/* ---------- CUSTOMER PURCHASES ---------- */}
      <div className="customers-section">
        <h3>🛍 Customer Purchases</h3>
        {customers.length === 0 ? (
          <p>No customers yet</p>
        ) : (
          <ul>
            {customers.map((customer, index) => (
              <li key={index}>
                {customer.name} bought: {customer.items.join(', ')}
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link to="/" className="back-button">
        🔙 Back to Dashboard
      </Link>
    </div>
  );
}

export default Farmers;
