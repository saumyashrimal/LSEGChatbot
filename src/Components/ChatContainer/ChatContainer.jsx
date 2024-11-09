import React, { useState, useEffect, useRef } from "react";
import { Stocks } from "../../data";
import { getSelectOptions } from "../../Utilities/helpers";
import Select from "../Select/Select";
import { headings, welcomeMessage, endChatMessage } from "../../Constants";
import Chat from "./Chat";

export default function ChatContainer() {
  const [chatChain, setChatChain] = useState([
    { isBot: true, isChat: true, text: welcomeMessage, chatState: 1 },
    { isBot: true, isChat: false, options: getSelectOptions(Stocks, 1), label: headings[1], chatState: 1 },
  ]);

  const [chatState, setChatState] = useState(1);
  const handleUndoClick = () => {
    let newChain = chatChain;
    newChain.pop();
    newChain.pop();
    setChatChain(newChain);
    setChatState(prev => prev-1);
  }

  const handleSelect = (value) => {
    setChatState((prev) => prev+1)
    let label = headings[chatState+1]
    if(chatState === 2){
      label = label.replace('[[stockName]]', value.reply).replace('[[price]]', value.price);
    }
    if(chatState === 3){
      if(value === 'endChat') {
        setChatChain((prev) => [...prev, { isBot: true, isChat: true, text: endChatMessage, chatState: chatState+1}])
      } else if(value == 'backToMenu'){
        window.location.reload();
      }
      return
    }
    setChatChain((prev) => [
      ...prev,
      { isBot: false, isChat: true, text: value.reply, chatState: chatState+1 },
      {isBot: true, isChat: false, options: getSelectOptions(value.options, chatState+1), label, chatState: chatState+1 }
    ]);
  };
  return (
    <>
      {chatChain.map((chat) => (
        <>
          {chat.isChat && <Chat text={chat.text} isBot={chat.isBot} undoClick={handleUndoClick} disabled={!(chatState == chat.chatState)} />}
          {!chat.isChat && (
            <Select
              label={chat.label}
              options={chat.options}
              onSelect={handleSelect}
              disabled={!(chatState == chat.chatState)}
            />
          )}
        </>
      ))}
    </>
  );
}
