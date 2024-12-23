import React, { useState } from "react";
import { FiMoon, FiPlus, FiSearch, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import useSearchUser from "../../hooks/useSearchUser";
import { setotherUsers } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import SearchUser from "./SearchUser";
import AddConversation from "../DialogBoxes/AddConversation";

const ChatistHeader = ({ toggleTheme, isDarkTheme, authUser }) => {
  const [showAddConversation, setshowAddConversation] = useState(false);

  return (
    <>
      <AddConversation
        Show={showAddConversation}
        setShow={setshowAddConversation}
      />
      <div className="flex items-center justify-between px-2 mb-4">
        <Link className={`flex items-center gap-1 font-bold`}>
          <img className="w-10" src="/logo.svg" alt="Logo" />
          <h1 className="text-lg font-semibold">RapiNet</h1>
        </Link>
        <div className="text-xl max-lg:w-[50%] flex items-center justify-end">
          <button
            onClick={() => setshowAddConversation(true)}
            className="p-2 rounded-full hover:bg-gray-700 hover:text-white focus:outline-none"
            aria-label="Add conversation"
          >
            <FiPlus className=" rounded-full hover:bg-gray-700 hover:text-white focus:outline-none" />
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-700 hover:text-white focus:outline-none "
            aria-label="Toggle theme"
          >
            {isDarkTheme ? <FiSun /> : <FiMoon />}
          </button>
          <div className="flex md:hidden items-center">
            <Link
              to={"/profile"}
              className=" flex gap-2 items-center ml-1"
            >
              {authUser && (
                <>
                  <img className="w-8 h-8" src={authUser.profilePic} alt="" />
                  <div className="flex flex-col max-lg:hidden">
                    <span className="text-[8px] leading-tight">
                      @{authUser.username}
                    </span>
                    <span className="lg:text-sm text-[12px]">
                      {authUser.email}
                    </span>
                  </div>
                </>
              )}
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default ChatistHeader;
