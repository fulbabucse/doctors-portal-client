import React from "react";
import Services from "../../Services/Services";
import Hero from "../Hero/Hero";
import HomeAppointment from "../HomeAppointment/HomeAppointment";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <HomeAppointment></HomeAppointment>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
