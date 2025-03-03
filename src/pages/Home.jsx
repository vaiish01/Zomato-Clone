import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const restaurants = [
  { id: 1, name: "The Burger House", image: "https://th.bing.com/th/id/OIP.nsU0epFVOgOXjl8QuhtVdwHaE8?rs=1&pid=ImgDetMain/150", price: 5 },
  { id: 2, name: "Pasta Paradise", image: "https://i.ytimg.com/vi/OA5D0Wc0x58/maxresdefault.jpg", price: 8 },
  { id: 3, name: "Sushi Delight", image: "https://b.zmtcdn.com/data/pictures/chains/1/18138411/f396adb028442c9e1956ec4debb6bbc4.jpg", price: 12 },
  { id: 4, name: "Taco Haven", image: "https://th.bing.com/th/id/OIP.GQk6P1WVPdzAcBNJJvDUeQHaE4?w=235&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7", price: 6 },
  
  { id: 5, name: "Vegan Bites", image: "https://www.weareharrison.com/wp-content/uploads/2022/01/shutterstock_531648340-1-scaled.jpg", price: 10 },
  { id: 6, name: "Indian Spice", image: "https://th.bing.com/th/id/OIP.Dgh22jKzcCOtNM7L4tTNEwHaEJ?w=626&h=351&rs=1&pid=ImgDetMain", price: 9 },
  { id: 7, name: "Chinese Wok", image: "https://redhousespice.com/wp-content/uploads/2021/10/chinese-chow-mein-with-chicken-scaled.jpg", price: 11 },
 
  { id: 8, name: "BBQ Nation", image: "https://www.lanternclub.com.au/wp-content/uploads/2017/09/bbq-steak.jpg", price: 14 },
  { id: 9, name: "Dessert Delight", image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps21585_THCA153054D10_15_4b.jpg", price: 7 }
];

function Home() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  const homeStyle = { textAlign: "center", padding: "20px" };
  const restaurantListStyle = { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" };
  const cardStyle = { background: "white", padding: "15px", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center", width: "200px" };
  const imgStyle = { 
    width: "150px",  // Set a fixed width
    height: "150px", // Set a fixed height
    objectFit: "cover", // Ensures the image fills the space without distortion
    borderRadius: "10px" 
  };
  
  const buttonStyle = { display: "inline-block", marginTop: "10px", padding: "5px 10px", background: "#ff6b81", color: "white", textDecoration: "none", borderRadius: "5px", cursor: "pointer", border: "none" };

  const handleAddToCart = (restaurant) => {
    alert(`${restaurant.name} added to cart!`);
    const updatedCart = [...cart, restaurant];
    saveCart(updatedCart);
    alert(`${restaurant.name} added to cart!`);
  };

  return (
    <div style={homeStyle}>
      <h2>Popular Restaurants</h2>
      <div style={restaurantListStyle}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} style={cardStyle}>
            <img src={restaurant.image} alt={restaurant.name} style={imgStyle} />
            <h3>{restaurant.name}</h3>
            <p>${restaurant.price}</p>
            <Link to={`/restaurant/${restaurant.id}`} style={buttonStyle}>View</Link>
            <button style={buttonStyle} onClick={() => handleAddToCart(restaurant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
