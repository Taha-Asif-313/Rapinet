import React, { useState } from "react";
import { setuserMessages } from "../redux/messageSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const useGetConversation = () => {
  const dispatch = useDispatch();
  const GetUserMessages = async (Id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/message/get-conversation/${Id}`,
        { withCredentials: true }
      );

      if (response.data) {
        dispatch(setuserMessages(response.data.conversationMessages));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { GetUserMessages };
};

export default useGetConversation;
