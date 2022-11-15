import React from "react";
import AvailableCard from "./AvailableCard/AvailableCard";
import { format } from "date-fns";
import { useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointment = ({ selected }) => {
  const [treatment, setTreatment] = useState({});

  const date = format(selected, "PP");

  const {
    data: appointments = [],
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
      <div className="flex justify-center items-center h-full">
        <p className="text-3xl font-bold">L</p>
        <div className="w-5 h-5 border-4 border-dashed rounded-full animate-spin border-primaryColor"></div>
        <p className="text-3xl font-bold">ading....</p>
      </div>
    );
  }

  return (
    <div className="my-3 lg:my-20">
      <h3 className="text-secondaryColor text-xl text-center">
        Available Appointment on {format(selected, "PP")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {appointments?.map((appointment) => (
          <AvailableCard
            key={appointment._id}
            appointment={appointment}
            setTreatment={setTreatment}
          ></AvailableCard>
        ))}
      </div>
      <AppointmentModal
        selected={selected}
        treatment={treatment}
        setTreatment={setTreatment}
        refetch={refetch}
      ></AppointmentModal>
    </div>
  );
};

export default AvailableAppointment;
