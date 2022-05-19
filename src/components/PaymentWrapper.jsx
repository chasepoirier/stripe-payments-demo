import React from "react";
import ReactDOM from "react-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { STRIPE_PK } from "../constants";
import { createPaymentIntent } from "../api/payments";

const stripePromise = loadStripe(STRIPE_PK);

const PaymentWrapper = () => {
  const [loading, setLoading] = React.useState(true);

  const [clientSecret, setClientSecret] = React.useState("");

  const options = {
    // passing the client secret obtained in step 2
    clientSecret,
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  React.useEffect(() => {
    const fetchSecret = async () => {
      const result = await createPaymentIntent();
      setClientSecret(result);
      setLoading(false);
    };

    fetchSecret();
  }, []);

  if (loading) return <div>loading...</div>;

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm />
    </Elements>
  );
};

export default PaymentWrapper;
