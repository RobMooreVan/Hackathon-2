import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
// import axios from "axios";
import "./LoginPage.scss";

// import Header from "../../components/Header/Header";

function LoginPage() {
const navigate = useNavigate()
  return(
    <div>
      <h1>Login Page</h1>
      <div className="login-container">
      <label>Username</label>
      <input type="" />     
      <label>Password</label>
      <input type="" />   
      <Link to="/main">Login</Link>  
      </div>
    </div>
  );
}

export default LoginPage