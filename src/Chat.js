import React, { useState } from "react";
import "./Chat.css";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.js";
import Message from "./Message";
import { selectChatName, selectChatId } from "./features/chatSlice";
import db from "./firebase";
import { useEffect } from "react";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function Chat() {
  const user = useSelector(selectUser);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    setInput("");

    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photoURL,
      email: user.email,
      displayName: user.displayName,
    });
  };

  return (
    <div className="chat">
      {/* Chat Navbar*/}
      <div className="chat__navbar">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/* Chat Messages*/}
      <div className="chat__messages">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} contents={data} />
          ))}
        </FlipMove>
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
