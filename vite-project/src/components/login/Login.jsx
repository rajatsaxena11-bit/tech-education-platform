import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import {
  FaUser,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import "../../assets/mycss/login/login.css";

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })


  const navigate = useNavigate()

  const HandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();

    setLoginLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const res = await fetch(
        `https://server-5-n0c3.onrender.com/Login?email=${formData.email}&password=${formData.password}`
      );

      const data = await res.json();

      if (data.length > 0) {
        const user = data[0];

        localStorage.setItem("user", JSON.stringify(user));

        if (user.role === "admin") {
          navigate("/admindashboard");
        } else {
          navigate("/");
        }
      } else {
        alert("Invalid Email or Password");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoginLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); //

    return () => clearTimeout(timer);
  }, []);



 if (loginLoading) {
  return (
    <div className="frontend-loader">
      <div className="spinner"></div>
      <h3>Logging In...</h3>
    </div>
  );
}



  return (
    <div className="login-page">

      <div className="login-container">

        {/* Left Side */}

        <div className="login-left">
          <h1>Hello, Welcome!</h1>

          <p>Don't have an account?</p>

          <button className="register-btn">
            Register
          </button>
        </div>

        {/* Right Side */}

        <div className="login-right">

          <h2>Login</h2>

          <form onSubmit={HandleSubmit}>

            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                name="email"
                value={formData.email}
                onChange={HandleChange}
              />
              <FaUser />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={HandleChange}
              />
              <FaLock />
            </div>

            <div className="forgot">
              Forgot Password?
            </div>

            <button
              className="login-btn"
              type="submit"
              disabled={loginLoading}
            >
              {loginLoading ? "Logging In..." : "Login"}
            </button>

            <p className="social-text">
              or login with social platforms
            </p>

            <div className="social-icons">
              <a href={import.meta.env.VITE_APP_SITE_GOOGLE} target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
              <a href={import.meta.env.VITE_APP_SITE_FACEBOOK} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href={import.meta.env.VITE_APP_SITE_GITHUB} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href={import.meta.env.VITE_APP_SITE_LINKEDIN} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>

          </form>

        </div>

      </div>

    </div>
  );
}