import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    // If no access token or refresh token, redirect to login
    if (!accessToken || !refreshToken) {
      navigate("/login"); // Change "/login" to your login page URL
    }
  }, []);
  return <div>Hello, Home hamada lachhab </div>;
}

export default Home;
