import React from "react";
import "../../../assets/styles.css";

const Contact = () => {
  return (
    <div className="contact-container flex flex-col items-center mt-3 lg:mt-10 py-4 lg:py-10">
      <div className="flex flex-col items-center">
        <h4 className="text-[#12D0DC] text-2xl font-semibold">Contact Us</h4>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Stay connected with us
        </h1>
      </div>

      <div class="block px-4 mt-4 rounded-lg shadow-lg bg-transparent w-full lg:w-2/5">
        <form className="space-y-3">
          <div class="form-group">
            <input
              type="text"
              class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-[#12D0DC] focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-[#12D0DC] focus:outline-none"
              id="exampleInput8"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-[#12D0DC] focus:outline-none"
              id="exampleInput8"
              placeholder="Subject"
            />
          </div>
          <div class="form-group">
            <textarea
              class="
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
        focus:text-gray-700 focus:bg-white focus:border-[#12D0DC] focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-3 py-3 bg-[#12D0DC] text-white font-medium text-base leading-tight rounded-md shadow-md hover:bg-[#0ebeca] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
