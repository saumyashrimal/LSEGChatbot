import React from "react";
import "./ChatStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

const Chat = ({ text, isBot, undoClick, disabled }) => {
  return (
    <>
      {isBot ? (
        <div className="botChatContainer">
          <h4>{text}</h4>
        </div>
      ) : (
          <div className="userChat">
            <div className="userChatContainer">
              <h4>{text}</h4>
            </div>
            <div className="undoIcon"><FontAwesomeIcon icon={faUndo} onClick={() => {!disabled && undoClick()}} /></div>
          </div>
      )}
    </>
  );
};

export default Chat;
