import React from "react";
import "./ChatCard.scss";

import logo from "../../assets/icons/logo.svg";


function ChatCard() {
  return (
    <> 
      <div className="card">
        <div>
          <img className="chatbar__logo" src={logo} alt="logo"/>
          <h2>Visier, Inc.</h2>
        </div>
      </div>
    </>
  );
}

export default ChatCard;
