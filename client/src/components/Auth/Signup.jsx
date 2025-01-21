import React, { useState } from "react";
import { FaHome, FaLock, FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { MdOutlineTaskAlt } from "react-icons/md";
import axios from "axios";
import { IoMail } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading";

const Signup = () => {
  const [inputs, setinputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const { response, loading, fetchData } = useAuth(
    `${import.meta.env.VITE_API_URL}/api/auth/signup`,
    inputs
  );
  
  if (response.success) {
    navigate("/login");
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className=" md:flex-row-reverse mx-5 lg:mx-24 md:pt-28 pt-16 h-screen gap-8">
        <form className="w-full lg:w-[33%] lg:border p-6 rounded-xl mx-auto">
          <div className="mb-4 text-center">
            <Link
              className={`flex justify-center items-center gap-1 font-bold -ml-2`}
            >
              <img className="w-16" src="/logo.svg" alt="" />
              <h1 className="text-xl font-semibold">RapiNet</h1>
            </Link>
          </div>
          <div className="mb-3">
            <div className="relative flex items-center">
              <input
                name="fullname"
                onChange={onChangeHandler}
                value={inputs.fullname}
                type="text"
                required
                className="w-full bg-black text-sm border border-gray-300 px-4 py-2 rounded"
                placeholder="Enter Fullname"
              />
              <FaUser className="text-sm absolute right-4" />
            </div>
          </div>
          <div className="mb-3">
            <div className="relative flex items-center">
              <input
                name="username"
                onChange={onChangeHandler}
                value={inputs.username}
                type="text"
                required
                className="w-full bg-black text-sm border border-gray-300 px-4 py-2 rounded"
                placeholder="Enter Username"
              />
              <FaUser className="text-sm absolute right-4" />
            </div>
          </div>
          <div className="mb-3">
            <div className="relative flex items-center">
              <input
                name="email"
                onChange={onChangeHandler}
                value={inputs.email}
                type="text"
                required
                className="w-full bg-black text-sm border border-gray-300 px-4 py-2 rounded"
                placeholder="Enter Email"
              />
              <IoMail className="text-sm absolute right-4" />
            </div>
          </div>
          <div className="mb-3">
            <div className="relative flex items-center">
              <input
                name="password"
                onChange={onChangeHandler}
                value={inputs.password}
                type="text"
                required
                className="w-full bg-black text-sm border border-gray-300 px-4 py-2 rounded"
                placeholder="Enter Password"
              />
              <FaLock className="text-sm absolute right-4" />
            </div>
          </div>
          <div className="">
            <div className="relative flex items-center">
              <input
                name="confirmPassword"
                onChange={onChangeHandler}
                value={inputs.confirmPassword}
                type="text"
                required
                className="w-full bg-black text-sm border border-gray-300 px-4 py-2 rounded"
                placeholder="Confirm Password"
              />
              <FaLock className="text-sm absolute right-4" />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 mt-1">
            <div>
              <a className="text-primary text-[12px] hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="mt-5">
            <button
              onClick={fetchData}
              type="button"
              className="w-full shadow-xl py-1 px-5 text-sm font-semibold rounded-md text-white bg-primary hover:bg-transparent border-2 hover:text-primary border-primary transition-all"
            >
              SignUp
            </button>
            <p className="text-white text-sm text-center mt-6">
              Already have an account{" "}
              <a
                href="/login"
                className="text-primary font-semibold hover:underline ml-1 whitespace-nowrap"
              >
                Login here
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
