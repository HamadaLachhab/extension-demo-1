// NavigationBar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const hasTokens =
    localStorage.getItem("accessToken") && localStorage.getItem("refreshToken");

  const handleLogout = () => {
    // Clear tokens from localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    // Redirect to the login page
    navigate("/login"); // Change to your login page URL
  };
  return (
    <nav className="bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg p-4">
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            About
          </Link>
        </li>
        {hasTokens && (
          <li>
            <button
              onClick={handleLogout}
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
