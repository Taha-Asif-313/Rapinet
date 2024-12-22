import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConversations } from "../../redux/messageSlice";
import axios from "axios";
import Contact from "./Contact";
import ChatistHeader from "./ChatistHeader";

const Chatlist = () => {
  const dispatch = useDispatch();
  const [activeChat, setActiveChat] = useState(null);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const otherUsers = useSelector((state) => state.user.otherUsers);
  const conversations = useSelector((state) => state.message.conversations);

  useEffect(() => {
    const getConversations = async () => {
      try {
        // setLoading(true); // Start loading
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/message/user-conversations`,
          { withCredentials: true }
        );
        dispatch(setConversations(response.data.receiverIds));
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getConversations();
  }, []);

  return (
    <>
      <div
        className={`w-full lg:w-80 lg:block ${
          selectedUser ? "hidden" : "block"
        } ${isDarkTheme ? "bg-black" : "bg-white text-black"} border-r ${
          isDarkTheme ? "border-gray-700" : "border-gray-200"
        } p-4`}
      >
        <ChatistHeader />
        <ul className="space-y-2">
          {Array.isArray(otherUsers) &&
            conversations.map((conversation) => (
              <>
                <Contact
                  user={conversation}
                  activeChat={activeChat}
                  setActiveChat={setActiveChat}
                  isDarkTheme={isDarkTheme}
                />
              </>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Chatlist;
