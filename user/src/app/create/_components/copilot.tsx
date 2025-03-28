import React, { useState } from "react";
import axios from "axios";

export const EmailStep = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3005/users/create", {
        email,
        name,
        password,
        phoneNumber,
        address,
        role: "user", // Example role
      });

      console.log("User created:", response.data);
      alert("User created successfully!");
    } catch (err) {
      console.error("Error creating user:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Error creating user");
    }
  };

  return (
    <div>
      <h1>Create Account</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleSubmit}>Create Account</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
