import React, { useEffect, useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useAuth } from "../../utils/AuthProvider";

const Header = () => {
  const [token,setToken]=useState(false)
  const navigate = useNavigate();
  const {auth,setAuth } = useAuth();

  useEffect(()=> {
    setToken(localStorage.getItem('token')?true:false)
    console.log(auth)
  },[auth])

  const logout = e => {
    localStorage.removeItem('token');
    setToken(false)
    setAuth(false)
    navigate("/login", { replace: true });

  }
 
  return (
    <>
      <header className="py-4 shadow-sm bg-pink-100 lg:bg-white">
        <div className="container flex items-center justify-between">
          <a href="####" className="block w-32">
            <img
              src={require("../../Assets/images/logo.png")}
              alt="logo"
              className="w-full"
            />
          </a>
          <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
              placeholder="search"
            />
            <Link
              to="listplaces"
              className="bg-primary border border-primary text-white px-8 py-4 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition"
            >
              Search
            </Link>
          </div>

        </div>
      </header>
      <nav className="bg-gray-800 hidden lg:block">
        <div className="container">
          <div className="flex">
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
              <span className="text-white">
                <i className="fas fa-bars"></i>
              </span>
              <span className="capitalize ml-2 text-white">Menu</span>
              <div className="absolute left-0 top-full w-full divide-gray-300 divide-dashed divide-y bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
               <Link to="/"
                  className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition"
                >
                 <span className="ml-2 text-gray-600 text-sm">Home</span>

                </Link>
                <Link to="/places"
                  className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition"
                >
                 <span className="ml-2 text-gray-600 text-sm">All Places</span>

                </Link>
                <a href="#about"
                  className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition"
                >
                  <span className="ml-2 text-gray-600 text-sm">About us</span>
                </a>
                <a href="#contact"
                  className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition"
                >
                  <span className="ml-2 text-gray-600 text-sm">Contac us</span>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between flex-grow pl-12">
              <div class="ml-auto justify-self-end">
              {auth ? (
          <>
           <Link
                  to="/profile"
                  class="text-gray-200 hover:text-white transition mr-4"
                >
                  Account
                </Link>
                <button
                  onClick={logout}
                  class="text-gray-200 hover:text-white transition"
                >
                  Logout
                </button>
          </>
        ) : (
          <>
           <Link
                  to="/login"
                  class="text-gray-200 hover:text-white transition mr-4"
                >
                  login
                </Link>
                <Link
                  to="/register"
                  class="text-gray-200 hover:text-white transition"
                >
                  register
                </Link>
          </>
        )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
