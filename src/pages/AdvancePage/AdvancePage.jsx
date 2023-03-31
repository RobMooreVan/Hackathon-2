import React from "react";
import { Link } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import { useEffect } from "react";
import "./AdvancePage.scss";
import lightning from "../../assets/icons/Lightning.svg";
import threedots from "../../assets/icons/threedots.svg";
import advancecharts from "../../assets/images/advancecharts.svg";

function AdvancePage() {
  
  return (
    <>
      <div className="page-layout1">
        {" "}
        <Chat />
        {/* do not touch pls */}
        <section className="advance">
          <div className="advance-top">
            <h2 className="advance-title">Who is leaving?</h2>
            <div className="advance-actions">
              <button className="advance-button">March 23</button>
              <button className="advance-button advance-button--long">
                + Add a filter
              </button>
              <img src={lightning} />
              <img src={threedots} />
            </div>
          </div>
          <img className="advance-charts" src={advancecharts} alt="" />
        </section>
      </div>
    </>
  );
}

export default AdvancePage;
