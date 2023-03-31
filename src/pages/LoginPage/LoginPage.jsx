
import { Link } from "react-router-dom";

// import axios from "axios";
import "./LoginPage.scss";

// import Header from "../../components/Header/Header";

function LoginPage() {
  return(
    <div className="page-layout">  {/* do not touch pls */}
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