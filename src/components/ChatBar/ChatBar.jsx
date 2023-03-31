import React from "react";
import ChatCard from "../ChatCard/ChatCard";
import "./ChatBar.scss";

import logo from "../../assets/icons/logo.svg";


function ChatBar() {
  return (
    <> 
      <div className="chatbar">
        <div>
          <div className="chatbar__title">
            <h3>Analitic Data Sets</h3>
          </div>
          <div className="btn btn__wrapper">  
            <button className="btn--active">Simple</button>
            <button className="btn--inactive">Advanced</button>
          </div>
        </div>
        <div className="chatbar__wrapper-lower">
          <div>
            **Chat container**
            <ChatCard />
          </div>
          <img className="chatbar__logo" src={logo} alt="" />
        </div>
      </div>
    </>
  );
}

export default ChatBar;
