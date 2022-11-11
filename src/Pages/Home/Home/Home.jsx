import React from "react";
import Services from "../../Services/Services";
import Hero from "../Hero/Hero";
import HomeAppointment from "../HomeAppointment/HomeAppointment";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <HomeAppointment></HomeAppointment>
    </div>
  );
};

export default Home;
