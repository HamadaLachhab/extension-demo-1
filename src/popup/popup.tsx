// popup.tsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./popup.css";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar"; // Import the NavigationBar component

const Popup = () => {
  return (
    <div>
      {/* Use the NavigationBar component */}
      <NavigationBar />

      {/* Routes and components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Popup;
