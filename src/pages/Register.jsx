import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const successMessage = `Signup Successful! Details: \n${JSON.stringify(formData, null, 2)}`;
    localStorage.setItem("signupMessage", successMessage);
    alert(successMessage);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "white",
  };

  const formStyle = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "400px",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "15px",
    margin: "15px 0",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "16px",
  };

  const buttonStyle = {
    backgroundColor: " rgba(240, 99, 127, 0.9)",
    color: "white",
    padding: "15px 20px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input 
          style={inputStyle} 
          type="text" 
          name="name"
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          style={inputStyle} 
          type="email" 
          name="email"
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <input 
          style={inputStyle} 
          type="password" 
          name="password"
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
        />
        <button style={buttonStyle} type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
