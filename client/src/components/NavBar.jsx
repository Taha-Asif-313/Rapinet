import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogin = useSelector((state) => state.user.isLogin);

  const logoutItems = [
    { name: "Home", url: "/" },
    { name: "Blogs", url: "/blogs" },
    { name: "About", url: "/about" },
  ];
  const loginItems = [
    { name: "Home", url: "/" },
    { name: "CreateBlog", url: "/createblog" },
    { name: "Blogs", url: "/blogs" },
    { name: "About", url: "/about" },
  ];

  return (
    <>
      <nav
        className={`${
          isLogin ? "hidden" : "flex"
        } nav w-full z-20 justify-between items-center py-2 px-6 lg:px-10 bg-zinc-950 text-white`}
      >
        <div className="nav-start-section lg:w-[30%] w-[45%]">
          <div className="logo cursor-pointer">
            <Link className={`flex items-center gap-1 font-bold`}>
              <img className="w-10" src="/logo.svg" alt="Logo" />
              <h1 className="text-lg font-semibold">RapiNet</h1>
            </Link>
          </div>
        </div>
        <div className="nav-middle-section hidden md:flex space-x-4 justify-center lg:w-[40%]">
          <ul className="list-items flex items-center justify-center gap-3 ">
            {isLogin
              ? loginItems.map((item, index) => {
                  return (
                    <Link
                      key={index} // Add unique key prop
                      to={item.url}
                      className="list-item text-sm px-1 transition-all hover:border-b hover:text-primary border-primary cursor-pointer"
                    >
                      <li>{item.name}</li>
                    </Link>
                  );
                })
              : logoutItems.map((item, index) => {
                  return (
                    <a
                      key={index} // Add unique key prop
                      href={item.url}
                      className="list-item text-sm px-3 transition-all hover:border-b hover:text-primary border-primary cursor-pointer"
                    >
                      <li>{item.name}</li>
                    </a>
                  );
                })}
          </ul>
        </div>
        <div className="nav-end-section items-end justify-end lg:w-[30%] w-[45%] hidden md:flex space-x-4">
          <div className="buttons hidden lg:flex items-center justify-end gap-2">
            {isLogin ? (
              <>
                <div className="w-10">
                  <img
                    onClick={() => navigate("/profile")}
                    className="w-full rounded-full cursor-pointer border border-primary"
                    src={"/default-profile.jpg"}
                    alt=""
                  />
                </div>

                <a
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  className="singup-btn rounded-full py-1 px-5 transition-all bg-transparent border-2 border-primary cursor-pointer hover:bg-primary hover:text-black"
                >
                  Logout
                </a>
              </>
            ) : (
              <>
                <a
                  href={"/signup"}
                  className="singup-btn text-sm rounded py-1 px-5 font-medium transition-all duration-300 cursor-pointer border border-primary bg-primary hover:bg-transparent hover:font-normal hover:text-primary"
                >
                  Let's Chat
                </a>
              </>
            )}
          </div>
        </div>
        <div className="md:hidden z-50 flex items-center gap-4">
          {isLogin && (
            <img
              className="w-10 rounded-full border border-primary"
              onClick={() => navigate("/profile")}
              src={"/default-profile.jpg"}
              alt=""
            />
          )}
          <button className="text-white focus:outline-none z-10 text-2xl">
            {isOpen ? (
              <IoMdClose onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <HiOutlineMenuAlt3 onClick={() => setIsOpen(!isOpen)} />
            )}
          </button>
        </div>

        {/* mobile menu */}
        {isOpen && (
          <div className="md:hidden w-[50%] flex flex-col justify-between pt-20 pb-10 gap-10 z-30 px-4 absolute bg-zinc-950 right-0 top-0  h-screen">
            <div className="links flex flex-col justify-center gap-2">
              {isLogin
                ? loginItems.map((item, index) => {
                    return (
                      <Link
                        key={index} // Add unique key prop
                        to={item.url}
                        className="list-items text-center list-none py-1 px-5 bg-zinc-900 rounded-lg transition-all hover:bg-primary cursor-pointer"
                      >
                        <li>{item.name}</li>
                      </Link>
                    );
                  })
                : logoutItems.map((item, index) => {
                    return (
                      <a
                        key={index} // Add unique key prop
                        href={item.url}
                        className="list-items text-center list-none py-1 px-5 bg-zinc-900 rounded-lg transition-all hover:bg-primary cursor-pointer"
                      >
                        <li>{item.name}</li>
                      </a>
                    );
                  })}
            </div>
            <div className="btns flex flex-col justify-center gap-2">
              {isLogin ? (
                <>
                  <a className="singup-btn text-center rounded-full py-1 px-5 transition-all bg-transparent border-2 border-primary cursor-pointer hover:bg-primary hover:text-black">
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <a
                    href={"/signup"}
                    className="singup-btn text-center rounded-lg py-1 px-5 transition-all bg-transparent border-2 border-primary cursor-pointer hover:bg-primary hover:text-black"
                  >
                    SignUp
                  </a>
                  <a
                    href={"/login"}
                    className="singup-btn text-center rounded-lg py-1 px-5 transition-all bg-transparent border-2 border-primary cursor-pointer hover:bg-primary hover:text-black"
                  >
                    Login
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
