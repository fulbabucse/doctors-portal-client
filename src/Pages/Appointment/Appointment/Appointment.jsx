import React, { useState } from "react";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";
import HeroAppointment from "../HeroAppointment/HeroAppointment";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div>
      <HeroAppointment
        selected={selected}
        setSelected={setSelected}
      ></HeroAppointment>
      <AvailableAppointment selected={selected}></AvailableAppointment>
    </div>
  );
};

export default Appointment;
