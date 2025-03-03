import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";




function App() {
  return (
    <Router>
      <div style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Ensures full viewport height
        backgroundColor: "#fff"
      }}>
        {/* Navbar */}
        <Navbar />

        {/* Main Content - Fills Remaining Space */}
        <div style={{
          flex: 1, // Expands to fill available space
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px"
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>

        {/* Footer - Sticks to Bottom */}
        <footer style={{
          backgroundColor: "#ff6584",
          padding: "15px",
          textAlign: "center",
          color: "white",
          width: "100%",
        }}>
           {/* Contact Information */}
        <div className="mt-4 md:mt-0">
          <h3 className="text-lg font-medium">Contact Us</h3>
          <p className="text-gray-400 text-sm">Email: support@FoodFirst.com</p>
          <p className="text-gray-400 text-sm">Phone: +1 234 567 890</p>
        </div>

        {/* Social Media Links */}
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Facebook  |</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter   |</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram  </a>
        </div>
          © 2025 FoodFirst  - All Rights Reserved
        </footer>
      </div>
    </Router>
  );
}

export default App;
