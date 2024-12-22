import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const UserProfile = ({ username, fullname, email, profilePic }) => {
  const [dialogOpen, setdialogOpen] = useState(false);
  const [updatedData, setupdatedData] = useState({ bio: "" });

  const onChaneHandler = (e) => {
    setupdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-black overflow-auto h-screen w-full flex justify-center items-center shadow-2xl lg:w-[80%] p-8 transition-all duration-300 animate-fade-in">
      <Link to={"/chat-page"} className="absolute m-4 top-0 right-0 text-4xl">
        <IoIosArrowForward />
      </Link>
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/3 text-center mb-8 md:mb-0">
          <img
            src={profilePic}
            alt="Profile Picture"
            className="rounded-full w-32 h-32 md:w-48 md:h-48 mx-auto mt-20 mb-4 border-4 border-primary transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-2xl font-bold mb-2">{fullname}</h1>
          <p className="text-gray-600 dark:text-gray-300">{username}</p>
          <div className="flex gap-2 items-center justify-center">
            <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
              Edit Profile
            </button>
            <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
              Log out
            </button>
          </div>
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-xl font-semibold text-white mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Passionate software developer with 5 years of experience in web
            technologies. I love creating user-friendly applications and solving
            complex problems.
          </p>
          <h2 className="text-xl font-semibold text-white mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
              JavaScript
            </span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
              React
            </span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
              Node.js
            </span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
              Python
            </span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
              SQL
            </span>
          </div>
          <h2 className="text-xl font-semibold text-primary dark:text-white mb-4">
            Contact Information
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {email}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
