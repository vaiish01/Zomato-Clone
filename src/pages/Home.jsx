import { Link } from "react-router-dom";

const restaurants = [
  { id: 1, name: "The Burger House", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Pasta Paradise", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Sushi Delight", image: "https://via.placeholder.com/150" },
];

function Home() {
  const homeStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const restaurantListStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  };

  const cardStyle = {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "200px",
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "10px",
  };

  const buttonStyle = {
    display: "inline-block",
    marginTop: "10px",
    padding: "5px 10px",
    background: "#ff6b81",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  };

  return (
    <div style={homeStyle}>
      <h2>Popular Restaurants</h2>
      <div style={restaurantListStyle}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} style={cardStyle}>
            <img src={restaurant.image} alt={restaurant.name} style={imgStyle} />
            <h3>{restaurant.name}</h3>
            <Link to={`/restaurant/${restaurant.id}`} style={buttonStyle}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
