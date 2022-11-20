import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div class="relative">
            <div class="absolute">
              <div class="">
                <h1 class="my-2 text-primaryColor font-bold text-xl lg:text-3xl">
                  Oops! Page Not Found
                </h1>
                <p class="my-2 text-gray-800">
                  Sorry about that! Please visit our home page to get where you
                  need to go.
                </p>
                <Link to="/">
                  <button class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-primaryColor text-white hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-opacity-50">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
