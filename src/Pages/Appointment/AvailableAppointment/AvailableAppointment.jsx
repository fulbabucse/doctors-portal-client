import React from "react";
import AvailableCard from "./AvailableCard/AvailableCard";
import { format } from "date-fns";
import { useState } from "react";
import { useEffect } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const AvailableAppointment = ({ selected }) => {
  const [appointments, setAppointments] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointments.json")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

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
      {treatment && (
        <AppointmentModal
          selected={selected}
          treatment={treatment}
          setTreatment={setTreatment}
        ></AppointmentModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
