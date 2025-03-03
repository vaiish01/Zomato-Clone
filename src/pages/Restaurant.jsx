import { useParams } from "react-router-dom";

const restaurants = [
  { id: 1, name: "The Burger House", image: "https://th.bing.com/th/id/OIP.nsU0epFVOgOXjl8QuhtVdwHaE8?rs=1&pid=ImgDetMain/150", price: 5, menu: ["Cheese Burger", "Veg Burger", "Chicken Burger"], reviews: ["Great taste!", "Loved it!"] },
  { id: 2, name: "Pasta Paradise", image: "https://i.ytimg.com/vi/OA5D0Wc0x58/maxresdefault.jpg", price: 8, menu: ["Penne Alfredo", "Spaghetti Bolognese"], reviews: ["Amazing pasta!", "Super delicious!"] },
  { id: 3, name: "Sushi Delight", image: "https://b.zmtcdn.com/data/pictures/chains/1/18138411/f396adb028442c9e1956ec4debb6bbc4.jpg", price: 12, menu: ["Salmon Roll", "Tuna Sushi"], reviews: ["Fresh sushi!", "Will order again!"] },
  { id: 4, name: "Taco Haven", image: "https://th.bing.com/th/id/OIP.GQk6P1WVPdzAcBNJJvDUeQHaE4?w=235&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7", price: 6, menu: ["Italian Tacos", "Veggie Tacos", "Chicken Tacos"], reviews: ["Tacos are amazing!", "Best in town!"] },
  { id: 5, name: "Vegan Bites", image: "https://www.weareharrison.com/wp-content/uploads/2022/01/shutterstock_531648340-1-scaled.jpg", price: 10, menu: ["Vegan Salad", "Quinoa Bowl", "Tofu Wrap"], reviews: ["Healthy and tasty!", "Loved it!"] },
  { id: 6, name: "Indian Spice", image: "https://th.bing.com/th/id/OIP.Dgh22jKzcCOtNM7L4tTNEwHaEJ?w=626&h=351&rs=1&pid=ImgDetMain", price: 9, menu: ["Butter Chicken", "Paneer Tikka", "Dal Makhani"], reviews: ["Authentic taste!", "Best Indian food!"] },
  { id: 7, name: "Chinese Wok", image: "https://redhousespice.com/wp-content/uploads/2021/10/chinese-chow-mein-with-chicken-scaled.jpg", price: 11, menu: ["Chow Mein", "Kung Pao Chicken", "Spring Rolls"], reviews: ["Delicious and flavorful!", "A must-try!"] },
  { id: 8, name: "BBQ Nation", image: "https://www.lanternclub.com.au/wp-content/uploads/2017/09/bbq-steak.jpg", price: 14, menu: ["Grilled Steak", "BBQ Ribs", "Smoked Chicken"], reviews: ["Perfectly cooked!", "Best BBQ in town!"] },
  { id: 9, name: "Dessert Delight", image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps21585_THCA153054D10_15_4b.jpg", price: 7, menu: ["Chocolate Cake", "Fruit Tart", "Cheesecake"], reviews: ["Heavenly desserts!", "Sweet and delightful!"] }
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