import React from "react";
import "./Imessage.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function Imessage() {
  return (
    <div className="iMessage">
      <Sidebar />
      {/* Chat */}
      <Chat />
    </div>
  );
}

export default Imessage;
