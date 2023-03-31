import React from "react";
import { useState, useEffect } from "react";
import { useParams, useLocation} from "react-router-dom";
import "./Chat.scss";
import chatbtn from "../../assets/icons/chat.svg";
import chatbox from "../../assets/images/ChatBoxMainPage.svg";
import chatbox2 from "../../assets/images/ChatBoxRetention.svg";
import chatbox3 from "../../assets/images/ChatBoxRetention2.svg";
import { useNavigate } from "react-router-dom";

function Chat({ chatState }) {
  const navigate = useNavigate();
  const [chat, setChat] = useState(false);
  const [isAdvanced, setIsAdvanced] = useState(false);
  const location = useLocation();

  console.log(location.pathname)
  useEffect(()=>{
      if(location.pathname==="/advance"){
      setIsAdvanced(true)
    }
    },[])

  const handleClick = (e) => {
    setChat(!chat);
  };

  const handleChange = () => {
    setIsAdvanced(!isAdvanced);
    navigate("/advance");
  };



  return (
    <div className="chat-layout">
      <div className="chat__container">
        <h1 className="chat__toggle__label">Analytical Data Sets</h1>

        <div className={isAdvanced ? "toggle-switch" : "toggle-switch2"}>
          <input
            type="checkbox"
            id="switch"
            className="toggle-switch-checkbox"
            onChange={handleChange}
            checked={isAdvanced}
          />
          <label htmlFor="switch" className="toggle-switch-label">
            <span
              className="toggle-switch-inner"
              data-advanced="Advanced"
              data-simple="Simple"
            ></span>
            <span className="toggle-switch-switch"></span>
          </label>
        </div>
        <p className="status-label">{isAdvanced ? "Advanced" : "Simple"}</p>
        <img
          className="chat__icon"
          onClick={handleClick}
          src={chatbtn}
          alt=""
        />
        {chat && (
          <img
            className="chat__box "
            src={
              chatState === "mainpage"
                ? chatbox
                : chatState === "retention"
                ? chatbox2
                : chatbox3
            }
            alt="chatbox"
          />
        )}
      </div>
    </div>
  );
}

export default Chat;
