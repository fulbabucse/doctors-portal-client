import React from "react";
import { useLoaderData } from "react-router-dom";

const Payments = () => {
  const bookingData = useLoaderData();
  const { treatment, price, appointmentTime, bookingDate } = bookingData;
  console.log(bookingData);
  return (
    <div className="mt-3">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-ternaryColor capitalize">
          payment on {treatment}
        </h1>
        <p>
          Please pay ${price} for your Appointment on {bookingDate} at{" "}
          {appointmentTime}
        </p>
      </div>
    </div>
  );
};

export default Payments;
