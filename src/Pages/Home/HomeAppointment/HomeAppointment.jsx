import React from "react";
import doctor from "../../../assets/images/doctor.png";
import "../../../assets/styles.css";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const HomeAppointment = () => {
  return (
    <div className="appointment-section">
      <div className="home_appointment grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="doctor-img">
          <img className="md:hidden lg:block" src={doctor} alt="" />
        </div>
        <div className="text-white space-y-1 lg:space-y-3 px-5">
          <h3 className="text-primaryColor text-2xl">Appointment</h3>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Make an appointment Today
          </h1>
          <p className="font-medium text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default HomeAppointment;
