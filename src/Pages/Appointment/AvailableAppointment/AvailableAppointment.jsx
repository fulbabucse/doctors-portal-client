import React from "react";
import AvailableCard from "./AvailableCard/AvailableCard";

const AvailableAppointment = () => {
  const availableDate = [
    {
      _id: 1,
      name: "Teeth Orthodontics",
      availableTime: "10.00 AM - 12.30 PM",
      availableSpace: 10,
    },
    {
      _id: 2,
      name: "Cometic Dentistry",
      availableTime: "11.00 AM - 1.30 PM",
      availableSpace: 12,
    },
    {
      _id: 3,
      name: "Teeth Cleaning",
      availableTime: "1.00 PM - 5.30 PM",
      availableSpace: 20,
    },
    {
      _id: 4,
      name: "Teeth Orthodontics",
      availableTime: "10.00AM - 12.30 PM",
      availableSpace: 30,
    },
    {
      _id: 5,
      name: "Teeth Orthodontics",
      availableTime: "10.00AM - 12.30 PM",
      availableSpace: 15,
    },
    {
      _id: 6,
      name: "Teeth Orthodontics",
      availableTime: "10.00AM - 12.30 PM",
      availableSpace: 17,
    },
  ];
  return (
    <div className="my-3 lg:my-20">
      <h3 className="text-secondaryColor text-xl text-center">
        Available Appointment on 12 December, 2022
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {availableDate.map((available) => (
          <AvailableCard
            key={available._id}
            available={available}
          ></AvailableCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;
