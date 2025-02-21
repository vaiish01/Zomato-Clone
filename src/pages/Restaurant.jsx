import { useParams } from "react-router-dom";

const restaurants = [
  { 
    id: 1, 
    name: "The Burger House", 
    image: "https://th.bing.com/th/id/OIP.jgVvC5M8r9zUdR-TGk6wwAHaLH?rs=1&pid=ImgDetMain",
    menu: ["Cheese Burger", "Veggie Burger", "Chicken Burger"],
    reviews: ["Great burgers!", "Loved the taste!", "Affordable and delicious!"]
  },
  { 
    id: 2, 
    name: "Pasta Paradise", 
    image: "https://via.placeholder.com/300", 
    menu: ["Spaghetti Carbonara", "Penne Arrabbiata", "Lasagna"],
    reviews: ["Authentic Italian taste!", "Best pasta in town!", "Loved it!"]
  },
  { 
    id: 3, 
    name: "Sushi Delight", 
    image: "https://via.placeholder.com/300", 
    menu: ["Salmon Sushi", "Tuna Roll", "California Roll"],
    reviews: ["Fresh and tasty!", "Best sushi ever!", "Good value for money."]
  }
];

function Restaurant() {
  let { id } = useParams();
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) {
    return <h2>Restaurant not found</h2>;
  }

  const pageStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const imageStyle = {
    width: "300px",
    borderRadius: "10px",
  };

  const menuStyle = {
    listStyle: "none",
    padding: 0,
  };

  const reviewStyle = {
    background: "#f4f4f4",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px 0",
  };

  return (
    <div style={pageStyle}>
      <h2>{restaurant.name}</h2>
      <img src={restaurant.image} alt={restaurant.name} style={imageStyle} />
      
      <h3>Menu</h3>
      <ul style={menuStyle}>
        {restaurant.menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Reviews</h3>
      {restaurant.reviews.map((review, index) => (
        <p key={index} style={reviewStyle}>{review}</p>
      ))}
    </div>
  );
}

export default Restaurant;
