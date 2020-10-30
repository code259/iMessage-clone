import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.js";
import { forwardRef } from "react";

const Message = forwardRef(
  (
    { id, contents: { timestamp, displayName, email, message, photo, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);
    return (
      <div
        ref={ref}
        className={
          user.email === email
            ? " message message__sender"
            : "message message__receiver"
        }
      >
        <Avatar src={user.email === email ? user.photoURL : photo} />
        <p>{message}</p>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
    );
  }
);

// <div className={`message ${user.email === email && "message__sender"}`}>

// not working : className={`message ${user.email === email ? "message__sender": "message_receiver"}`}
export default Message;
