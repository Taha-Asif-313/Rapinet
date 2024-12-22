import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import useSearchUser from "../../hooks/useSearchUser";
import { setotherUsers } from "../../redux/userSlice";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Contact from "../Chatlist/Contact"; // Import Contact component

const AddConversation = ({ Show, setShow, activeChat, setActiveChat }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const otherUsers = useSelector((state) => state.user.otherUsers);
  const { response, loading, error, fetchData } = useSearchUser(
    `${import.meta.env.VITE_API_URL}/api/auth/search-users`,
    searchTerm
  );
  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
    fetchData();
    if (response) {
      dispatch(setotherUsers(response));
    }
  };
  return (
    <div
      className="h-screen w-full absolute top-0 left-0 bg-primary bg-opacity-50 z-50 items-center justify-center"
      style={{ display: Show ? "flex" : "none" }}
    >

      <div className="md:w-[60%] max-lg:px-5 w-full h-full md:h-[70%] md:max-h-[400px] relative py-10 flex items-center flex-col bg-black rounded ">
       <IoMdClose onClick={()=>setShow(!Show)} className="absolute top-0 right-0 mx-4 my-4 text-3xl"/>
        <div class="w-full max-lg:pt-5 mb-5 max-w-sm md:min-w-[70%]">
          <div class="relative">
            <input
              class="w-full bg-transparent text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Search Users"
              value={searchTerm}
              onChange={onChangeHandler}
            />
            <button
              class="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
             <FaSearch className="text-white mr-1" />
              Search
            </button>
          </div>
        </div>

        <ul
          className={`space-y-2 w-full md:w-[70%] z-50 ${
            otherUsers.length === 0 ? "hidden" : "block"
          } bg-black`}
        >
          {Array.isArray(otherUsers) &&
            otherUsers.map((conversation) => (
              <Contact
                key={conversation._id}
                user={conversation}
                activeChat={activeChat}
                setActiveChat={setActiveChat}
                isDarkTheme={isDarkTheme}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AddConversation;
