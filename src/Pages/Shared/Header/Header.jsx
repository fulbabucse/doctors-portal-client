import React, { useState } from "react";
import { useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/doctor-plus-logo.png";
import doctorThumb from "../../../assets/icons/doctor-thumb.jpg";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const { user } = useContext(AuthContext);
  const handleUserSignOut = () => {};
  return (
    <div>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-4 lg:px-0 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between w-full">
            <div className="flex items-center justify-between">
              <div>
                <Link to="/">
                  <h1 className="flex items-center gap-1 text-xl lg:text-3xl font-bold text-gray-800">
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
                <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                  <div>
                    <div className="flex justify-center">
                      <div className="dropdown relative">
                        <button
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            className="w-14 h-10 rounded-full text-xs"
                            src={user?.photoURL || doctorThumb}
                            alt="User Picture"
                          />
                        </button>
                        <ul
                          className=" dropdown-menu px-2 min-w-max absolute hidden bg-white text-base z-50 space-y-2 py-2 list-none text-left rounded-md shadow-2xl mt-1 m-0 bg-clip-padding border-none"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          {user?.uid && (
                            <li>
                              <Link
                                to="/profile"
                                className="dropdown-item text-center rounded-md text-md py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                              >
                                {user?.displayName || "User Profile"}
                              </Link>
                            </li>
                          )}

                          {!user?.email && (
                            <li>
                              <Link
                                to="/sign-up"
                                className="text-sm font-normal block w-full whitespace-nowrap bg-transparent"
                              >
                                <button
                                  type="button"
                                  data-mdb-ripple="true"
                                  data-mdb-ripple-color="light"
                                  className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0  w-full active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                  Sign Up
                                </button>
                              </Link>
                            </li>
                          )}
                          {user?.email && (
                            <>
                              <li>
                                <Link to="/my-reviews">
                                  <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg w-full focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                  >
                                    My Review
                                  </button>
                                </Link>
                              </li>
                              <li>
                                <Link to="/add-service" className="w-full">
                                  <button
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 w-full active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                  >
                                    Add Service
                                  </button>
                                </Link>
                              </li>
                            </>
                          )}
                          <li>
                            {user?.uid ? (
                              <button
                                onClick={handleUserSignOut}
                                className="inline-block w-full px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
                              >
                                Sign Out
                              </button>
                            ) : (
                              <Link to="/sign-in" className="w-full">
                                <button
                                  data-mdb-ripple="true"
                                  data-mdb-ripple-color="light"
                                  className="inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 w-full active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                  Sign In
                                </button>
                              </Link>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
