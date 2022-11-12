import React, { useState } from "react";
import "../../../assets/styles.css";
import chair from "../../../assets/images/chair.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Hero = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="hero-content flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center">
        <div className="flex justify-center">
          <Calendar onChange={onChange} value={value} />
        </div>
        <div>
          <img src={chair} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
