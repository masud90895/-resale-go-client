import React from "react";
import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ChackOutForm from "./ChackOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_PK);
const Payment = () => {
  const booking = useLoaderData();
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold font-serif text-left ">
        Payment for{" "}
        <span className="border-b-2 border-[#19D3AE]">{booking.productName}</span>
      </h1>
      <p className="text-left text-xl mb-6 mt-4">
        Please pay <strong>${booking.price}</strong> for your Buying product  
        <span> {booking.productName}</span>
      </p>

      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <ChackOutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
