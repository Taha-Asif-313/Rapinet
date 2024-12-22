import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setselectedUser } from "../../redux/userSlice";
import { clearUserMessages } from "../../redux/messageSlice";
import useGetConversation from "../../hooks/useGetConversation";
import { IoIosAdd } from "react-icons/io";


const Contact = ({ user, activeChat, isDarkTheme, showAddUser }) => {
  const { GetUserMessages } = useGetConversation();
  const onlineUsers = useSelector((state) => state.user.onlineUsers);

  const isOnline =
    onlineUsers && onlineUsers.includes
      ? onlineUsers.includes(user._id)
      : false;

  const dispatch = useDispatch();

  const getUserMessages = async () => {
    if (!user) return; // Add null check for user
    dispatch(setselectedUser(user));
    dispatch(clearUserMessages());
    GetUserMessages(user._id);
  };
  console.log(user);

  return (
    <li className="flex" key={user._id}>
      <button
        onClick={getUserMessages}
        className={`w-full flex items-center p-2 rounded-lg ${
          activeChat?.id === user.id
            ? isDarkTheme
              ? "bg-gray-700"
              : "bg-gray-200"
            : "hover:bg-gray-700 hover:text-white"
        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
      >
        <div className="relative">
          <img
            src={user.profilePic}
            alt={user.fullname}
            className="w-10 h-10 object-cover rounded-full mr-3"
          />
          <div
            class={`absolute ${
              isOnline ? "" : "hidden"
            } bottom-0 right-0 w-3 h-3 mr-3 rounded-full bg-green-500 border-2 border-white`}
          ></div>
        </div>

        <div className="flex-1 text-left">
          <h3 className="font-semibold">{user.fullname}</h3>
          <h2 className="text-sm">@{user.username}</h2>
        </div>

        <button
          onClick={getUserMessages}
          className={`items-center mr-3 text-2xl ${
            showAddUser ? "flex" : "hidden"
          }`}
        >
          {" "}
          <IoIosAdd />{" "}
        </button>
      </button>
    </li>
  );
};

export default Contact;
