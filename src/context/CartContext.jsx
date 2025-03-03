import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (userId, restaurantId, foodId, quantity) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, restaurantId, foodId, quantity }),
      });

      const data = await response.json();
      if (response.ok) {
        setCart(data.cart.items);
      }
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
