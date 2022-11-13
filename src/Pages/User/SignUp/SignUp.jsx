import React from "react";
import signUp from "../../../assets/icons/sign-up.svg";

const SignUp = () => {
  return (
    <div className="my-6 lg:my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="">
          <img src={signUp} alt="Sign Up Logo" />
        </div>
        <div className="w-full lg:w-4/5 mx-auto">
          <div className="text-primaryColor text-center mb-4">
            <h1 className="text-xl lg:text-4xl font-semibold uppercase">
              Sign Up
            </h1>
            <p className="font-medium">Create a new Account</p>
          </div>
          <form className="space-y-6">
            <div class="grid md:grid-cols-2 md:gap-4 space-y-6 lg:space-y-0">
              <div class="relative z-0 w-full group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer"
                  placeholder=" "
                  required
                />
                <label
                  for="firstName"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div class="relative z-0 w-full group">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer"
                  placeholder=" "
                />
                <label
                  for="lastName"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name (optional)
                </label>
              </div>
            </div>
            <div class="relative z-0 w-full group">
              <input
                type="email"
                name="email"
                id="email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer"
                placeholder=" "
                required
              />
              <label
                for="email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div class="relative z-0 w-full group">
              <input
                type="password"
                name="createPassword"
                id="createPassword"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer"
                placeholder=" "
                required=" "
              />
              <label
                for="createPassword"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Create password
              </label>
            </div>
            <div class="relative z-0 w-full group">
              <input
                type="password"
                name="repeatPassword"
                id="floating_repeat_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer"
                placeholder=" "
                required
              />
              <label
                for="floating_repeat_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>

            <div class="relative z-0 w-full group">
              <input
                type="text"
                name="photoLink"
                id="photoLink"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer"
                placeholder=" "
                required=" "
              />
              <label
                for="photoLink"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Photo URL
              </label>
            </div>

            <button
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-4 py-3 bg-gradient-to-r from-primaryColor to-secondaryColor text-white font-medium text-lg leading-tight rounded-md shadow-md  hover:shadow-2xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-colors duration-200 ease-in-out"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
