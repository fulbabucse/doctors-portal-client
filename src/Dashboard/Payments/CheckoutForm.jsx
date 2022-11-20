import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";

const CheckoutForm = ({ bookingData }) => {
  const [cardError, setCardError] = useState("");
  const [loading, SetLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [succeeded, setSucceeded] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const {
    price,
    patient,
    email,
    _id,
    treatment,
    phoneNumber,
    bookingDate,
    appointmentTime,
  } = bookingData;

  useEffect(() => {
    fetch(
      "https://doctors-portal-server-navy.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem(
            "doctors-portal-access-token"
          )}`,
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setSucceeded("");
    SetLoading(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        treatment,
        patient,
        email,
        phoneNumber,
        price,
        transectionId: paymentIntent.id,
        bookingId: _id,
        appointmentTime,
      };
      fetch("https://doctors-portal-server-navy.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem(
            "doctors-portal-access-token"
          )}`,
        },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setSucceeded("Congrats! Complete your payment");
            setTransectionId(paymentIntent.id);
            SetLoading(false);
          }
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="inline-block px-4 py-1.5 bg-gradient-to-r from-primaryColor to-secondaryColor text-white font-medium text-lg leading-tight rounded-md shadow-md  hover:shadow-2xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-colors duration-200 ease-in-out mt-3"
          type="submit"
          disabled={!stripe || !clientSecret || loading}
        >
          Pay
        </button>
      </form>
      <p className="mt-2 text-primaryColor">{cardError}</p>
      {succeeded && (
        <>
          <p className="text-semibold text-purple-600">{succeeded}</p>
          <p className="text-semibold text-purple-600">
            TransectionID: {transectionId}
          </p>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
