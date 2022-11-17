import React from "react";
import "../../../assets/styles.css";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <div className="contact-container flex flex-col items-center mt-3 lg:mt-10 py-4 lg:py-10">
      <div className="flex flex-col items-center">
        <h4 className="text-primaryColor text-2xl font-semibold">Contact Us</h4>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Stay connected with us
        </h1>
      </div>

      <div className="block px-4 mt-4 rounded-lg shadow-lg bg-transparent w-full lg:w-2/5">
        <form className="space-y-3">
          <div className="form-group">
            <input
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primaryColor focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primaryColor focus:outline-none"
              id="exampleInput8"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primaryColor focus:outline-none"
              id="exampleInput8"
              placeholder="Subject"
            />
          </div>
          <div className="form-group">
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primaryColor focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="text-center">
            <PrimaryButton>Send</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
