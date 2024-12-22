import React, { useState } from "react";
import Chatlist from "../components/Chatlist/Chatlist";
import { Outlet } from "react-router-dom";

const ChatPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div
      className={`flex w-full h-screen ${
        isDarkTheme ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Chatlist
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Outlet />
    </div>
  );
};

export default ChatPage;
