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
          © 2025 Zomato Clone - All Rights Reserved
        </footer>
      </div>
    </Router>
  );
}

export default App;
