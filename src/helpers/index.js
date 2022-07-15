import Stripe from "stripe";

const formatter = new Intl.NumberFormat("US");

export const formatDollars = (number) => {
  return "$" + formatter.format(number);
};

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const initStripe = (stripeSk) =>
  new Stripe(stripeSk, {
    apiVersion: "2020-08-27; orders_beta=v4;",
  });
