import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
import Chat from "../../components/Chat/Chat";
import people from "../../assets/hardcodedStuff/peopledata.png";
import business from "../../assets/hardcodedStuff/businessdata.png";
import "./MainPage.scss"

function MainPage() {
  return (
    <>
      <div className="page-layout">
        {/* do not touch pls */}
        <Chat />
        <h1 className="dash-title">Welcome, Kathleen! 🙋‍♀️</h1>
<div className="dash-container">

        <Link to="/retention">
          <img className="dash-icon1" src={people} alt="" />
        </Link>
          <img  className="dash-icon"src={business} alt="" />
      </div>
</div>
    </>
  );
}

export default MainPage;
