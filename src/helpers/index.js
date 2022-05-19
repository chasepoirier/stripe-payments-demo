const formatter = new Intl.NumberFormat("US");

export const formatDollars = (number) => {
  return "$" + formatter.format(number);
};

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
