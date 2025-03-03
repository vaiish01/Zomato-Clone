import { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    saveCart(updatedCart);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const pageStyle = { textAlign: "center", padding: "20px" };
  const listStyle = { listStyle: "none", padding: 0 };
  const buttonStyle = {
    background: "#ff6b81",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
  };

  return (
    <div style={pageStyle}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={listStyle}>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button style={buttonStyle} onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button style={buttonStyle} onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default Cart;