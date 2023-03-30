import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
// import axios from "axios";
import "./HomePage.scss";

// import Header from "../../components/Header/Header";

function HomePage() {

  return(
    <div>
      <Header />
      <h2>Home at last!</h2>
      <Gallery />
      <Footer />
    </div>
  );
}

export default HomePage