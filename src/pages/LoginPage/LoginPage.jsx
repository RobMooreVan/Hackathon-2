
import { Link } from "react-router-dom";

// import axios from "axios";
import "./LoginPage.scss";
import vLogo from "../../assets/logo/Logo-remade.png"

// import Header from "../../components/Header/Header";

function LoginPage() {
  return(
    <div className="page-layout">  {/* do not touch pls */}
      <div className="login-box">
        <div className="top">
          <img src={vLogo} alt="logo"/>
        </div>
        <div className="login-container">
        <label>Username</label>
        <input className="login-input " type="input" />     
        <label className="pw">Password</label>
        <input className="login-input" type="password" />   
        </div>
        <Link className="login__btn" to="/main">Login</Link>  
      </div>
    </div>
  );
}

export default LoginPage