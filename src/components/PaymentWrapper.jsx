import React from "react";
import ReactDOM from "react-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { STRIPE_PK } from "../constants";
import { createOrder } from "../api/payments";
import useTheme from "../hooks/useTheme";
import useCart from "../hooks/useCart";

const stripePromise = loadStripe(STRIPE_PK, {
  apiVersion: "2020-08-27; orders_beta=v3;",
});

const PaymentWrapper = () => {
  // const [loading, setLoading] = React.useState(true);

  const [theme] = useTheme();
  const [cart] = useCart();
  const [clientSecret, setClientSecret] = React.useState("");
  const [error, setError] = React.useState("");

  const options = {
    clientSecret,
    appearance: {
      variables: {
        colorPrimary: theme.primaryColor,
        colorBackground: theme.backgroundColor,
        colorText: theme.textColor,
        fontFamily: theme.fontFamily,
        spacingUnit: `${theme.spacing}px`,
        borderRadius: `${theme.borderRadius}px`,
        fontSizeBase: `${theme.fontSize}px`,
      },
      labels: "floating",
    },
    loader: "always",
  };

  React.useEffect(() => {
    const fetchSecret = async () => {
      const result = await createOrder(
        cart.items.map((item) => ({
          product: item.id,
          quantity: item.quantity,
        }))
      );

      if (result.error) {
        setError(result.error);
      } else {
        setClientSecret(result.clientSecret);
      }
    };

    fetchSecret();
  }, []);

  if (error || !options.clientSecret) return <div>{error}</div>;

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm />
    </Elements>
  );
};

export default PaymentWrapper;
