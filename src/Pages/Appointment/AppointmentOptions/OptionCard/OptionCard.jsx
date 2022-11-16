import React from "react";

const OptionCard = ({ option, setShowModal }) => {
  const { name, slots } = option;
  return (
    <div className="text-center py-10 px-3 shadow-lg rounded-lg">
      <h3 className="text-secondaryColor text-xl font-medium">{name}</h3>
      <p>8.00 AM - 12.00 PM</p>
      <p>
        {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
      </p>
      <div className="mt-2">
        <button
          type="button"
          onClick={() => setShowModal({ false: false, option })}
          //   onBlur={() => setTreatment(option)}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-4 py-3 bg-gradient-to-r from-primaryColor to-secondaryColor text-white font-medium text-lg leading-tight rounded-md shadow-md  hover:shadow-2xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-colors duration-200 ease-in-out"
        >
          Appointment Now
        </button>
      </div>
    </div>
  );
};

export default OptionCard;
