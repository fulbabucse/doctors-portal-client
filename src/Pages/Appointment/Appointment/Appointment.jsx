import React, { useState } from "react";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import HeroAppointment from "../HeroAppointment/HeroAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <HeroAppointment
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></HeroAppointment>
      <AppointmentOptions selectedDate={selectedDate}></AppointmentOptions>
    </div>
  );
};

export default Appointment;
