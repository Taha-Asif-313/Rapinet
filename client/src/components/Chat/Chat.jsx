import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Message from "./Message";
import SendMessageField from "./SendMessageField";
import { setuserMessages } from "../../redux/messageSlice";
import {
  logOutPannel,
  setauthUser,
  setotherUsers,
  setselectedUser,
} from "../../redux/userSlice";
import ChatHeader from "./ChatHeader";


const Chat = ({ isDarkTheme, sidebarOpen, setSidebarOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.user.authUser);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const userMessages = useSelector((state) => state.message.userMessages);

  const handleLogout = () => {
    dispatch(logOutPannel());
    dispatch(setselectedUser(null));
    dispatch(setuserMessages([]));
    dispatch(setauthUser(null));
    dispatch(setotherUsers(null));
    navigate("/");
  };

  return (
    <>
      <main
        className={`flex-1 lg:flex flex-col ${
          selectedUser ? "flex" : "hidden"
        } `}
      >
        {/* Chatheader for profile data and chatuser data */}
        {<ChatHeader />}

        <div className="flex-1 overflow-y-auto p-6 bg-black space-y-4">
          {selectedUser ? (
            Array.isArray(userMessages) &&
            userMessages.map((msg) => (
              <Message
                key={msg._id} // Add unique key prop
                msg={msg}
                selectedUser={selectedUser}
                isDarkTheme={isDarkTheme}
              />
            ))
          ) : (
            <div className="flex items-center justify-center flex-col h-full rounded-md">
              <p className=" text-4xl">
                Welcome{" "}
                <span className="font-bold text-primary">
                  {authUser.username}! 👋
                </span>
              </p>
            </div>
          )}
        </div>

        {/*Send message field */}
        {selectedUser && <SendMessageField />}
      </main>
    </>
  );
};

export default Chat;
