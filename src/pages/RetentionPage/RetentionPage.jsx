import React from "react";
import { Link } from "react-router-dom";
import "./RetentionPage.scss";
import Chat from "../../components/Chat/Chat";
import graph1 from "../../assets/hardcodedStuff/graph1.png";
import graph2 from "../../assets/hardcodedStuff/graph2.png";
import graph3 from "../../assets/hardcodedStuff/graph3.png";
import profiles from "../../assets/hardcodedStuff/profiles.png";
import arrow from "../../assets/icons/arrow.svg"

function RetentionPage() {
  return (
    <>
      <div className="page-layout">
        {/* do not touch pls */}
        <Chat />
        <div className="retention__title--layout">
          <h1 className="retention__title">Addressing Retention Risks</h1>
          <h2 className="retention__subtitle">What is driving turnover?</h2>
        </div>
        <div className="box__bigcontainer">
          <div className="box__container">
            <div>
              <h2 className="box__header">Overall Resignation Rate</h2>
              <p className="box__date">Feb. 2022</p>
            </div>
            <img className="box__graph" src={graph1} alt="" />
          </div>
          <div className="box__container">
            <div>
              <h2 className="box__header">Manager Resignation</h2>
              <p className="box__date">Feb. 2022 Employee {`>`} Manager</p>
            </div>
            <img className="box__graph" src={graph2} alt="" />
          </div>
          <div className="box__container">
            <div>
              <h2 className="box__header">New Hire Resignation</h2>
              <p className="box__date">Feb. 2022 Employee {`>`} New Hire</p>
            </div>
            <img className="box__graph" src={graph3} alt="" />
          </div>
        </div>

        <div className="risk">
          <div>
            <h2 className="risk__title1">Risks: 2</h2>
            <h2 className="risk__title2">Improvement: 7s</h2>
          </div>
          <div className="risk__table">
            <div className="risk__table__layout">
              <h3 className="risk__table__title">Who</h3>
              <img className="risk__profiles" src={profiles} alt="" />
            </div>
            <div className="risk__table__layout">
              <h3 className="risk__table__title">Risk Type</h3>
              <div>  
              <h3 className="risk__table__title1">Resignation</h3>
              <h3 className="risk__table__title1">Burnout</h3>
              </div>
            </div>
            <div className="risk__table__layout">
              <div className="bg">  
              <Link to="/tworetention">
              <img className="risk__table__title2" src={arrow}/>
              </Link>
              <img className="risk__table__title2" src={arrow}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RetentionPage;
