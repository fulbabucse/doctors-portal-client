import React from "react";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";

const AvailableCard = ({ available }) => {
  const { name, availableTime, availableSpace } = available;
  return (
    <div className="text-center py-10 px-3 shadow-lg rounded-lg">
      <h3 className="text-secondaryColor text-xl font-medium">{name}</h3>
      <p>{availableTime}</p>
      <p>{availableSpace} Space Available</p>
      <div className="mt-2">
        <PrimaryButton>Book Appointment</PrimaryButton>
      </div>
    </div>
  );
};

export default AvailableCard;
