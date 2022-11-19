import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_StripeKey);

const Payments = () => {
  const bookingData = useLoaderData();
  const { treatment, price, appointmentTime, bookingDate } = bookingData;

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
      <div className="w-96 mx-auto mt-4">
        <Elements stripe={stripePromise}>
          <CheckoutForm bookingData={bookingData} />
        </Elements>
      </div>
    </div>
  );
};

export default Payments;
