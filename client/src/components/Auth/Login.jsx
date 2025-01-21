import React, { useState } from "react";
import { FaHome, FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logIn, setauthUser } from "../../redux/userSlice";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading";

const Login = () => {
  const [inputs, setinputs] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const { response, loading, error,fetchData } = useAuth(
    `${import.meta.env.VITE_API_URL}/api/auth/login`,
    inputs
  );

  if (response.success) {
    dispatch(logIn());
    dispatch(setauthUser(response));
    localStorage.setItem("userData", JSON.stringify(response));
    navigate("/chat-page");
  }

  if (loading) {
    return <Loading />;
  }
  if(error){
    console.log(error);
    toast.error("An error occured"); 
  }
    

  return (
    <>
      <div className=" md:flex-row-reverse mx-5 lg:mx-24 md:pt-36 pt-24 h-screen gap-8">
        <form className="w-full lg:w-[33%] lg:border p-6 rounded-xl mx-auto">
          <div className="mb-4 ">
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
          <div>
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

          <div className="flex flex-wrap items-center justify-between gap-4 mt-1">
            <div>
              <a className="text-primary text-[12px] hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="mt-2">
            <button
              onClick={fetchData}
              type="button"
              className="w-full shadow-xl py-1 px-5 text-sm font-semibold rounded text-white bg-primary hover:bg-transparent border-2 hover:text-primary border-primary transition-all"
            >
              Log in
            </button>
            <p className="text-white text-sm text-center mt-6">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-primary hover:underline ml-1 whitespace-nowrap"
              >
                Register here
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
