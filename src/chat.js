import React from "react";
import chat from "./Foto/chat.svg";
import "./chat.css";

const ChatComponent = () => {
  return (
    <div className="chat-container">
      <div className="chat">
        <img alt="Loading..." src={chat} />
      </div>
    </div>
  );
};

export default ChatComponent;
