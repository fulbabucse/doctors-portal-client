import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React from "react";
import { useState } from "react";
import BookingModal from "./BookingModal/BookingModal";
import OptionCard from "./OptionCard/OptionCard";

const AppointmentOptions = ({ selectedDate }) => {
  const [modalData, setModalData] = useState(false);
  const date = format(selectedDate, "PP");

  const {
    data: options = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full mt-20">
        <p className="text-3xl font-bold">L</p>
        <div className="w-5 h-5 border-4 border-dashed rounded-full animate-spin border-primaryColor"></div>
        <p className="text-3xl font-bold">ading....</p>
      </div>
    );
  }

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
        refetch={refetch}
      ></BookingModal>
    </div>
  );
};

export default AppointmentOptions;
