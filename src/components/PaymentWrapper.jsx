import React from "react";
import ReactDOM from "react-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { FONTS } from "../constants";
import { createOrder } from "../api/payments";
import useTheme from "../hooks/useTheme";
import useCart from "../hooks/useCart";

const PaymentWrapper = () => {
  // const [loading, setLoading] = React.useState(true);

  const [theme] = useTheme();
  const [cart, _, dispatch] = useCart();
  const [clientSecret, setClientSecret] = React.useState("");
  const [error, setError] = React.useState("");

  const options = {
    fonts: FONTS,
    clientSecret,
    appearance: {
      variables: {
        colorPrimary: theme.primaryColor,
        colorBackground: theme.backgroundColor,
        colorText: theme.textColor,
        fontFamily: theme.fontFamily.replace("+", " "),
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
        })),
        cart.sk
      );
      console.log(result);
      dispatch({
        type: "init",
        payload: { loaded: true, order: result.order },
      });

      if (result.error) {
        setError(result.error);
      } else {
        setClientSecret(result.clientSecret);
      }
    };

    if (cart.initialized) {
      fetchSecret();
    }
    dispatch({ type: "set_loaded", payload: { loaded: false } });
  }, [cart.initialized, cart.sk]);

  if (error || !options.clientSecret || !cart.pk || !cart.initialized)
    return <div>{error}</div>;

  const stripePromise = loadStripe(cart.pk, {
    betas: ["process_order_beta_1"],
    apiVersion: "2020-08-27; orders_beta=v3;",
  });

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm />
    </Elements>
  );
};

export default PaymentWrapper;
