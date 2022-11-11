import React from "react";
import "../../../assets/styles.css";
import chair from "../../../assets/images/chair.png";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <div>
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="space-y-1 lg:space-y-3">
          <h1 className="text-xl lg:text-5xl font-bold text-gray-800">
            Your New <br /> Smile Starts Here
          </h1>
          <p className="secondary-font font-medium text-gray-600/90">
            Historically, drugs were discovered through identifying the active
            ingredient from traditional remedies or by serendipitous discovery.
            Later chemical libraries of synthetic small molecules.
          </p>
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            class="inline-block px-3 py-3 bg-[#12D0DC] text-white font-medium text-base leading-tight rounded-md shadow-md hover:bg-[#0ebeca] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
          >
            Get Started
          </button>
        </div>
        <div>
          <img src={chair} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-5 lg:mt-0 lg:mb-5">
        <div className="bg-[#11D0DB] py-6 px-5 flex items-center gap-3 text-white rounded-md">
          <FaClock className="text-6xl font-bold "></FaClock>
          <div>
            <h3 className="text-2xl font-semibold">Opening Hours</h3>
            <p>8.00AM - 10.00PM</p>
          </div>
        </div>

        <div className="bg-[#3A4255] py-6 px-5 flex items-center gap-3 text-white rounded-md">
          <HiLocationMarker className="text-7xl font-bold "></HiLocationMarker>
          <div>
            <h3 className="text-2xl font-semibold">Visit Our Location</h3>
            <p>10/12 Gopalpur Lane, Rangpur, Bangladesh</p>
          </div>
        </div>

        <div className="bg-[#11D0DB] py-6 px-5 flex items-center gap-3 text-white rounded-md">
          <FaPhoneAlt className="text-5xl font-bold "></FaPhoneAlt>
          <div>
            <h3 className="text-2xl font-semibold">Contact Us Now</h3>
            <p>880 1736 534 295</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
