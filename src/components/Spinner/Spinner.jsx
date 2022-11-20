import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="spinner-grow w-12 h-12 bg-current rounded-full opacity-0 text-primaryColor"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
