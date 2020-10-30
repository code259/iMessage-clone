import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setChat } from "./features/chatSlice";

function SidebarChat({ id, chatName }) {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);

  return (
    <div
      onClick={() => {
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName,
          })
        );
      }}
      className="sidebarChat"
    >
      <Avatar />
      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>Last message sent...</p>
        <small>Timestamp</small>
      </div>
    </div>
  );
}

export default SidebarChat;
