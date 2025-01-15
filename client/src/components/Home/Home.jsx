import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  return (
    <>
      <div class="h-[600px] md:h-screen max-lg:h-screen md:py-32 px-8 flex">
        <div class=" mx-auto text-center mt-20">
          <h2 class=" md:text-6xl text-5xl font-extrabold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-primary after:left-0 after:right-0 after:mx-auto after:rounded-full">
            Welcome to <span className="text-primary">RapiNet</span>!
          </h2>
          <div class="mt-12 flex justify-center items-center w-full">
            <p class="text-base w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              accumsan, nunc et tempus blandit, metus mi consectetur felis
              turpis vitae ligula.
            </p>
          </div>

          <div class="flex max-sm:flex-col justify-center gap-6 mt-12">
            <a
              href="/signup"
              type="button"
              class="min-w-[140px] text-center rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-primary bg-primary hover:bg-transparent hover:text-primary transition-all duration-300"
            >
              Sign up
            </a>
            <a
              href="/login"
              type="button"
              class=" min-w-[140px] text-center rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border border-gray-300 hover:bg-gray-50 hover:text-black transition-all duration-300"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
