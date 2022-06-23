import React from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import useTheme from "../hooks/useTheme";
import Button from "./Button";
import { classNames } from "../helpers";

const PaymentForm = () => {
  const [theme] = useTheme();

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
      <Button
        className={classNames("mt-8 text-sm py-3 w-full")}
        label="Pay Now"
        type="submit"
        style={{ backgroundColor: theme.primaryColor }}
      />
    </form>
  );
};

export default PaymentForm;
