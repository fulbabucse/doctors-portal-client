import React from "react";

const AvailableCard = ({ appointment, setTreatment }) => {
  const { name, slots } = appointment;
  return (
    <div className="text-center py-10 px-3 shadow-lg rounded-lg">
      <h3 className="text-secondaryColor text-xl font-medium">{name}</h3>
      <p>{slots?.length > 0 ? slots[0] : "Try Another day"}</p>
      <p>
        {slots?.length} {slots.length > 1 ? "Spaces" : "Space"} Available
      </p>
      <div className="mt-2">
        <button
          type="button"
          onClick={() => setTreatment(appointment)}
          disabled={slots?.length === 0}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          data-bs-toggle="modal"
          data-bs-target="#appointmentModal"
          className="inline-block px-4 py-3 bg-gradient-to-r from-primaryColor to-secondaryColor text-white font-medium text-lg leading-tight rounded-md shadow-md  hover:shadow-2xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-colors duration-200 ease-in-out"
        >
          {slots?.length > 0 ? "Appointment Now" : "Not Available"}
        </button>
      </div>
    </div>
  );
};

export default AvailableCard;
