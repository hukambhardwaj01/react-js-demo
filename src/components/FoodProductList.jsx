import React, { useState } from "react";
import { FaCartPlus, FaTrash } from "react-icons/fa";

const initialProducts = [
  {
    id: 1,
    name: "Product-1",
    image: "https://via.placeholder.com/100",
    quantity: "250g",
    price: 80,
  },
  {
    id: 2,
    name: "Product-2",
    image: "https://via.placeholder.com/100",
    quantity: "300g",
    price: 120,
  },
  {
    id: 3,
    name: "Product-3",
    image: "https://via.placeholder.com/100",
    quantity: "300g",
    price: 110,
  },
];

const FoodProductList = () => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2> Product List</h2>
      <div style={styles.list}>
        {initialProducts.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ₹{product.price}</p>
            <div style={styles.actions}>
              {isInCart(product.id) ? (
                <button
                  onClick={() => removeFromCart(product.id)}
                  style={styles.removeBtn}
                >
                  <FaTrash /> Remove
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  style={styles.addBtn}
                >
                  <FaCartPlus /> Add
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    // padding: "20px",
    fontFamily: "Arial",
  },
  list: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    width: "100%",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#966a00",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  actions: {
    marginTop: "10px",
  },
  addBtn: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  removeBtn: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default FoodProductList;
