import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import LogIn from "./pages/LogInPage";
import SignUp from "./pages/SignUpPage";
import io from "socket.io-client";
import AuthProtected from "./components/Protected/AuthProtected";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setonlineUsers } from "./redux/userSlice";
import { setuserMessages } from "./redux/messageSlice";
import Profile from "./pages/Profile";
import Navbar from "./components/NavBar";
import { setSocketId } from "./redux/socketSlice";
import Chat from "./components/Chat/Chat";

const App = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const authUser = useSelector((state) => state.user.authUser);
  const userMessages = useSelector((state) => state.message.userMessages);
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (isLogin && authUser) {
      const newSocket = io("http://localhost:5000", {
        query: { userId: authUser.userId },
      });
      setSocket(newSocket);
      dispatch(setSocketId(newSocket.id));

      newSocket.on("connect", () => {
        console.log("Connected to socket server");
      });
      newSocket.on("getOnlineUser", (users) => {
        dispatch(setonlineUsers(users));
        console.log(users);
      });
      newSocket.on("userMessages", (messages) => {
        dispatch(setuserMessages(messages));
        console.log(messages);
      });

      newSocket.on("sendMessage", (message) => {
        dispatch(setuserMessages([...userMessages, message]));
        console.log(message);
      });
      return () => {
        newSocket.disconnect();
      };
    }
  }, [isLogin, authUser, dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/chat-page"
          element={<AuthProtected Component={ChatPage} />}
        >
          <Route index element={<Chat />} />
        </Route>
        <Route path="/profile" element={<Profile />} /> {/* Corrected path */}
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
