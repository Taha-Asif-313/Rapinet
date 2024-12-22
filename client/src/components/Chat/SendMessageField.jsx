import React, { useState } from "react";
import { FiPaperclip, FiSend, FiSmile } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setuserMessages } from "../../redux/messageSlice";

const SendMessageField = () => {
  const [message, setMessage] = useState("");
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const userMessages = useSelector((state) => state.message.userMessages);
  const authUser = useSelector((state) => state.user.authUser);
  const dispatch = useDispatch();

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/message/send-message/${selectedUser._id}`,
        {
          message: message,
        },
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        setMessage("");
        dispatch(setuserMessages([...userMessages, res.data.newMessage]));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={sendMessage}
        className={`p-4 ${isDarkTheme ? "bg-black" : "bg-black"} border-t ${
          isDarkTheme ? "border-gray-700" : "border-gray-600"
        } w-full `}
      >
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className={`p-2 rounded-full ${
              isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-100"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            aria-label="Attach file"
          >
            <FiPaperclip />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className={`flex-1 ${
              isDarkTheme
                ? "bg-gray-700 text-white"
                : "bg-gray-100 text-gray-900"
            } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <button
            type="button"
            className={`p-2 rounded-full ${
              isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-100"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            aria-label="Add emoji"
          >
            <FiSmile />
          </button>
          <button
            type="submit"
            className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Send message"
          >
            <FiSend />
          </button>
        </div>
      </form>
    </>
  );
};

export default SendMessageField;
