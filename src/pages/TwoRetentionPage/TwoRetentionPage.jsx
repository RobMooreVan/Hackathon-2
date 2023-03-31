import React from "react";
import { Link } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import "./TwoRetentionPage.scss";

import img1 from "../../assets/hardcodedStuff/frame-3.png";
import img2 from "../../assets/hardcodedStuff/frame-5.png";

function TwoRetentionPage({ chatState, handleChatContent }) {
  return (
    <>
      <div className="page-layout">

        <Chat chatState={chatState} />
        <div className="row">
        <h1 className="header">Connie, here are your top risks:</h1>
        <h2 className="date">March 2023</h2>
        </div>
        <div className="wrapper__main">
          <div className="wrapper-left">
            <div className="wrapper__left--top">
              <img className="img" src={img1} alt="" />
              <img className="img--alt" src={img2} alt="" />
            </div>
          </div>
          <div className="wrapper__right">
            <div className="risk wrapper__text-box risk--high">
              <p className="risk--high risk--high">
                Predicted Risk of Resignation
              </p>
              <p className="risk--high risk--high-alt">89%</p>
            </div>
            <div className="risk__wrapper">
              <div className="wrapper__text-box">
                <p className="risk">Vacation used</p>
                <p className="risk">13%</p>
              </div>
              <div className="wrapper__text-box">
                <p className="risk">Overtime worked</p>
                <p className="risk">178%</p>
              </div>
              <div className="wrapper__text-box">
                <p className="risk">Employee burnout zone</p>
                <p className="risk">99%</p>
              </div>
            </div>
            <div className="wrapper__left--bottom">
              <div className="wrapper__text-box">
                <p>Last promotion</p>
                <p>14 months</p>
              </div>
              <div className="wrapper__text-box">
                <p>Earnings vs market</p>
                <p>79%</p>
              </div>
              <div className="wrapper__text-box">
                <p>Experience score</p>
                <p>4/7</p>
              </div>
              <div className="wrapper__text-box">
                <p>Satisfaction rate</p>
                <p>64%</p>
              </div>
              <div className="wrapper__text-box">
                <p>Organization ID</p>
                <p>VFX Supervisor</p>
              </div>
              <div className="wrapper__text-box">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TwoRetentionPage;
