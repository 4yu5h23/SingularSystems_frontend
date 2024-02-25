import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(currentCart => [...currentCart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(currentCart => currentCart.filter(product => product !== productToRemove));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button className="btn btn-primary" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button className="btn btn-danger ml-3" onClick={() => removeFromCart(item)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Total: ${calculateTotal()}</h2>
    </div>
  );
};

export default App;
