import React from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import useTheme from "../hooks/useTheme";
import Button from "./Button";
import { classNames } from "../helpers";
import ErrorModal from "./ErrorModal";
import SuccessModal from "./SuccessModal";

const PaymentForm = () => {
  const [theme] = useTheme();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await stripe.processOrder({
      elements,
      confirmParams: {
        return_url: window.location.href,
      },
    });

    if (result.error) {
      console.log(result.error.message);
      setError(result.error.message);
    } else {
      if (result.order.payment.status === "complete") {
        setSuccess(true);
      }
    }
    setLoading(false);
  };

  return (
    <form>
      <PaymentElement
        options={{
          business: theme.name,
          fields: {
            billingDetails: theme.shipping ? "auto" : "never",
          },
          wallets: {
            applePay: theme.wallets ? "auto" : "never",
            googlePay: theme.wallets ? "auto" : "never",
          },
        }}
      />
      <ErrorModal
        isOpen={!!error}
        message={error}
        onClose={() => setError("")}
      />
      <SuccessModal isOpen={success} onClose={() => setSuccess(false)} />

      <Button
        className={classNames("mt-8 text-sm py-3 w-full")}
        label={loading ? "Submitting..." : "Pay Now"}
        style={{
          backgroundColor: theme.primaryColor,
          borderRadius: theme.borderRadius,
          fontFamily: theme.fontFamily,
          fontSize: theme.fontSize,
          padding: theme.spacing * 4,
        }}
        onClick={onSubmit}
      />
    </form>
  );
};

export default PaymentForm;
