import { useState } from "react";
import API from "../api"; // Import API utility

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(""); // Store JWT token

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      setMessage(res.data.message);
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token); // Save token for future use
      alert("Login successful!"); // Alert message on success
    } catch (error) {
      const errorMsg = error.response?.data?.error || "Login failed";
      setMessage(errorMsg);
      alert(errorMsg); // Alert message on failure
    }
  };

  const pageStyle = { textAlign: "center", padding: "20px" };
  const formStyle = { display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" };
  const inputStyle = { padding: "10px", width: "250px", borderRadius: "5px", border: "1px solid #ccc" };
  const buttonStyle = { padding: "10px 20px", background: "#ff6b81", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" };

  return (
    <div style={pageStyle}>
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle} />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
      {token && <p>✅ Logged in! Token saved.</p>}
    </div>
  );
}

export default Login;