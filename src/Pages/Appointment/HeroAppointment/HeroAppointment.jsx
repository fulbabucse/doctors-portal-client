import React from "react";
import "../../../assets/styles.css";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const HeroAppointment = ({ selected, setSelected }) => {
  return (
    <div className="hero-content flex items-center mt-6 lg:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center">
        <div className="flex justify-center">
          <div className="shadow-xl rounded-lg">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            ></DayPicker>
          </div>
        </div>
        <div>
          <img src={chair} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroAppointment;
