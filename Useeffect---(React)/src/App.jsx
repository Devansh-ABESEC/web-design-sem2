import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Runs whenever formData changes
  useEffect(() => {
    console.log("Form Data Updated:", formData);
  }, [formData]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Registered Successfully!\nName: ${formData.name}\nEmail: ${formData.email}`
    );

    // Clear form after submit
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          {/* Email Field */}
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          {/* Password Field */}
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          {/* Submit Button */}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default App;