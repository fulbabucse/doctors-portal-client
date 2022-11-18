import React, { useState } from "react";
import { Helmet } from "react-helmet";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import HeroAppointment from "../HeroAppointment/HeroAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <Helmet>
        <title>Appointments - Doctors Portal</title>
      </Helmet>
      <HeroAppointment
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></HeroAppointment>
      <AppointmentOptions selectedDate={selectedDate}></AppointmentOptions>
    </div>
  );
};

export default Appointment;
