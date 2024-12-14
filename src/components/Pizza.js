import React, { useState } from 'react';
import './Pizza.css'; // Import styles

// Pizza component
const Pizza = ({ name, price, imagePath }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + price);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - price);
    }
  };

  return (
    <div className="pizza-item">
      <img src={imagePath} alt={name} className="pizza-image" />
      <h2>{name}</h2>
      <p>Base Cost: ${price}</p>
      <p>Total Cost: ${totalPrice.toFixed(2)}</p>
      <p>Quantity: {quantity}</p>
      <div className="button-group">
        <button onClick={decreaseQuantity}>-</button>
        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  );
};

export default Pizza;
