import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Imessage from "./Imessage";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

// Additions on Clever Programming build :
// Apple Sign In
// Popup window when adding new chat , instead of prompt .
// Delete Chat option
// New messages come from bottom , change desc to asc in chat.js and change the forwardRef thing to the downward one ( google this)

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photoURL: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // User is logged out
        dispatch(logout());
      }
      console.log(authUser.email + ":" + authUser.photoURL);
    });
  }, []);

  return (
    // Bem naming convention
    <div className="app">{user ? <Imessage /> : <Login />}</div>
  );
}

export default App;
