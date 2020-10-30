import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.js";

function Message({
  id,
  contents: { timestamp, displayName, email, message, photoURL, uid },
}) {
  const user = useSelector(selectUser);
  return (
    <div className="message">
      <Avatar src={user.photoURL} />
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
    </div>
  );
}

export default Message;
