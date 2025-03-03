import { useState } from "react";
import API from "../api"; // Import API utility

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", { name, email, password });
      setMessage(res.data.message); // Success message
      alert("Registration successful!"); // Alert message
    } catch (error) {
      const errorMsg = error.response?.data?.error || "Registration failed";
      setMessage(errorMsg);
      alert(errorMsg); // Alert on error
      console.error("Error:", error.response?.data);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required style={{ padding: "10px", width: "250px" }} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: "10px", width: "250px" }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: "10px", width: "250px" }} />
        <button type="submit" style={{ padding: "10px 20px", background: "#ff6b81", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Register</button>
      </form>
    </div>
  );
}

export default Register;
