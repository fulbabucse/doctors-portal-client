import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet";
import DoctorCard from "../Shared/DoctorCard/DoctorCard";

const Doctors = () => {
  const { data: doctors = [] } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="mt-2">
      <Helmet>
        <title>Doctors - Doctors Portal</title>
      </Helmet>
      <h1 className="text-center font-semibold text-primaryColor text-2xl my-4">
        Our Specialist Doctors
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor?._id} doctor={doctor}></DoctorCard>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
