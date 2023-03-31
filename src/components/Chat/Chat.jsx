import React from "react";
import { useState } from "react";
import "./Chat.scss";
import chatbtn from "../../assets/icons/chat.svg";
import chatbox from "../../assets/hardcodedStuff/Screenshot 2023-03-30 225718.png";

function Chat() {
  const [chat, setChat] = useState(false);

  const handleClick = (e) => {
    setChat(!chat);
  };

  const [isAdvanced, setIsAdvanced] = useState(false);

  const handleChange = () => {
    setIsAdvanced(!isAdvanced);
  };

  return (
    <div className="chat-layout">
      <div className="chat__container">
        <h1 className="chat__toggle__label">Analytical Data Sets</h1>

        <div className={isAdvanced ? "toggle-switch" : "toggle-switch2"} >
      <input
        type="checkbox"
        id="switch"
        className="toggle-switch-checkbox"
        onChange={handleChange}
        checked={isAdvanced}
      />
      <label htmlFor="switch" className="toggle-switch-label">
        <span className="toggle-switch-inner" data-advanced="Advanced" data-simple="Simple"></span>
        <span className="toggle-switch-switch"></span>
      </label>
    </div>
      <p className="status-label">
      {isAdvanced ? "Advanced" : "Simple"}
      </p>
        <img
          className="chat__icon"
          onClick={handleClick}
          src={chatbtn}
          alt=""
        />
        {chat && <img className="chat__box " src={chatbox} alt="" />}
      </div>
    </div>
  );
}

export default Chat;
