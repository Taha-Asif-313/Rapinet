import React, { useEffect, useRef } from "react";
import { FiCheck } from "react-icons/fi";

const Message = ({ msg, selectedUser, isDarkTheme }) => {
  const messagesEndRef = useRef();

  // This function scrolls to the bottom of the message list
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [msg]);

  return (
    <>
      <div
        ref={messagesEndRef}
        key={msg.id}
        className={`flex ${
          msg.senderId === selectedUser._id ? "justify-start" : "justify-end"
        } cursor-pointer`}
      >
   
        <div
          className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-3 text-sm ${
            msg.senderId === selectedUser._id
              ? "bg-primary text-white"
              : isDarkTheme
              ? "bg-gray-700"
              : "bg-gray-600 text-white"
          }`}
        >
          <p>{msg.message}</p>
          <div className="flex items-center justify-end mt-1 text-xs text-white">
            <span>{msg.timestamp}</span>
            {msg.read && <FiCheck className="ml-1" />}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Message;
