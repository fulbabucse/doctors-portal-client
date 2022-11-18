import React from "react";
import { Helmet } from "react-helmet";
import Services from "../../Services/Services";
import Contact from "../../Shared/Contact/Contact";
import Hero from "../Hero/Hero";
import HomeAppointment from "../HomeAppointment/HomeAppointment";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Doctors Portal</title>
      </Helmet>
      <Hero></Hero>
      <Services></Services>
      <HomeAppointment></HomeAppointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default Home;
