import React from "react";
import signIn from "../../../assets/icons/sign-in.svg";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useState } from "react";

const SignIn = () => {
  const [errors, setErrors] = useState("");
  const { signUser } = useContext(AuthContext);
  const handleUserSignIn = (e) => {
    e.preventDefault();
    setErrors("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        if (err.message === "Firebase: Error (auth/user-not-found).") {
          setErrors("User not found");
        } else if (err.message === "Firebase: Error (auth/wrong-password).") {
          setErrors("You are entering the wrong password");
        }
      });
  };
  const handleGoogleSignIn = () => {};
  const handlePasswordReset = () => {};
  return (
    <div className="my-6 lg:my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="">
          <img src={signIn} alt="Sign Up Logo" />
        </div>
        <div className="w-full lg:w-4/5 mx-auto">
          <div className="text-primaryColor text-center mb-4">
            <h1 className="text-xl lg:text-4xl font-semibold uppercase">
              Sign In
            </h1>
            <p className="font-medium">Sign in to access your account</p>
          </div>
          <form onSubmit={handleUserSignIn} className="space-y-6">
            <div className="relative z-0 w-full group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full group">
              <input
                type="password"
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>

            <button
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-4 py-3 bg-gradient-to-r from-primaryColor to-secondaryColor text-white font-medium text-lg leading-tight rounded-md shadow-md  hover:shadow-2xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-colors duration-200 ease-in-out"
            >
              Sign In
            </button>
          </form>
          <div className="flex justify-between items-center mt-3">
            <p className="text-red-600">{errors}</p>
            <button
              onClick={handlePasswordReset}
              className="text-purple-600 hover:text-purple-700 focus:text-purple-700 active:text-purple-800 duration-200 transition ease-in-out"
            >
              Forgot password?
            </button>
          </div>
          <div>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0 text-gray-700">
                OR
              </p>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="px-7 py-3 text-white font-medium text-sm leading-snug capitalize rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-amber-600"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <FaGoogle className="mx-1"></FaGoogle> Continue with Google
            </button>
            <p className="text-md font-semibold text-gray-700 mt-3 text-center">
              Already have an account?
              <Link
                to="/sign-up"
                className="text-primaryColor hover:text-primaryColor focus:text-primaryColor transition duration-200 ease-in-out ml-1"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
