import { format } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BookingModal from "./BookingModal/BookingModal";
import OptionCard from "./OptionCard/OptionCard";

const AppointmentOptions = ({ selectedDate }) => {
  const [modalData, setModalData] = useState(false);
  const [options, setOptions] = useState([]);
  //   const [treatment, setTreatment] = useState({});
  const date = format(selectedDate, "PP");

  useEffect(() => {
    fetch(`http://localhost:5000/appointmentOptions`)
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);

  return (
    <div className="my-5 lg:my-16">
      <div className="mb-4">
        <h3 className="text-secondaryColor text-xl text-center">
          Available Appointment on {format(selectedDate, "PP")}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {options.map((option) => (
          <OptionCard
            key={option._id}
            option={option}
            setModalData={setModalData}
          ></OptionCard>
        ))}
      </div>
      <BookingModal
        modalData={modalData}
        setModalData={setModalData}
        date={date}
      ></BookingModal>
    </div>
  );
};

export default AppointmentOptions;
