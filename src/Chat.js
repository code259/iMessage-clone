import React, { useState } from "react";
import "./Chat.css";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.js";

function Chat() {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    setInput("");

    // Firebase Magic...
  };

  const user = useSelector(selectUser);

  return (
    <div className="chat">
      {/* Chat Navbar*/}
      <div className="chat__navbar">
        <h4>
          To: <span className="chat__name">Channel Name</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/* Chat Messages*/}
      <div className="chat__messages">
        <h2>I am a message for testing</h2>
        <h2>I am a message for testing</h2>
        <h2>I am a message for testing</h2>
        <h2>I am a message for testing</h2>
        <h2>I am a message for testing</h2>
        <h2>I am a message for testing</h2>
        <h2>I am a message for testing</h2>
        <h2>I am a message for testing</h2>
      </div>
      {/* Chat Input*/}
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="iMessage"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>

        <IconButton>
          <MicNoneOutlinedIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
