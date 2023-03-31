import { React } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import magnifying from "../../assets/icons/magnifying.svg";
import logo from "../../assets/icons/logo.svg";
import book from "../../assets/icons/book.svg";
import bars from "../../assets/icons/bars.svg";
import grid from "../../assets/icons/grid.svg";
import explorer from "../../assets/icons/explorer.svg";
import file from "../../assets/icons/files.svg";
import home from "../../assets/icons/home.svg";
import people from "../../assets/icons/people.svg";

function NavBar() {
  return (
    <>
      <div className="navbar__container">
        <div className="navbar__icons-logo-container">
          <Link to="/">
            <img className="navbar__icons-logo" src={logo} alt="" />/
          </Link>
        </div>
        <Link to="/main">
          <img className="navbar__icons" src={home} alt="" />
        </Link>
        <img className="navbar__icons" src={magnifying} alt="" />
        <img className="navbar__icons" src={book} alt="" />
        <img className="navbar__icons" src={bars} alt="" />
        <Link to="/retention">
          <img className="navbar__icons" src={people} alt="" />
        </Link>
        <img className="navbar__icons" src={grid} alt="" />
        <img className="navbar__icons" src={file} alt="" />
        <img className="navbar__icons" src={explorer} alt="" />
      </div>
    </>
  );
}

export default NavBar;
