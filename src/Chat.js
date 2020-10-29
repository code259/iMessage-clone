import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    setInput("");

    // Firebase Magic...
  };

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
      </div>
    </div>
  );
}

export default Chat;
