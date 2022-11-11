import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/doctor-plus-logo.png";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-4 lg:px-0 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between w-full">
            <div className="flex items-center justify-between">
              <div>
                <Link to="/">
                  <h1 className="flex items-center gap-1 text-lg lg:text-2xl font-bold text-gray-800">
                    Doctors <img className="w-4 h-4" src={logo} alt="" /> Portal
                  </h1>
                </Link>
              </div>

              <div className="flex lg:hidden">
                <button
                  className="p-2 text-slate-700 rounded-md outline-none focus:border-slate-700 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <FaTimes></FaTimes> : <FaBars></FaBars>}
                </button>
              </div>
            </div>

            <div
              className={`${
                navbar
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              } absolute inset-x-0 z-20 flex-1 w-full px-4 shadow-lg lg:shadow-none pb-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-end`}
            >
              <div className="secondary-font flex flex-col transition-all duration-300 ease-in-out  text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-0 lg:flex-row lg:items-center">
                <Link
                  to="/"
                  className="transition-colors font-medium duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  Home
                </Link>

                <Link
                  to="/appointment"
                  className="transition-colors font-medium duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  Appointment
                </Link>

                <Link
                  to="/reviews"
                  className="transition-colors font-medium duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  Reviews
                </Link>

                <Link
                  to="/about"
                  className="transition-colors font-medium duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  className="transition-colors font-medium duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  Contact Us
                </Link>

                <Link
                  to="/login"
                  className="transition-colors font-medium duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
