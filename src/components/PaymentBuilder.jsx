import React from "react";
import { THEME } from "../constants";
import { classNames } from "../helpers";
import useTheme from "../hooks/useTheme";
import Button from "./Button";

const PaymentBuilder = () => {
  const [theme] = useTheme();
  const isDark = theme.scheme === THEME.DARK;
  return (
    <div className="mt-8">
      <div className="flex justify-between gap-2 h-12">
        <div
          className={classNames(
            "rounded flex-1",
            isDark ? "bg-slate-700" : "bg-gray-200"
          )}
        />
        <div
          className={classNames(
            "rounded flex-1",
            isDark ? "bg-slate-700" : "bg-gray-200"
          )}
        />
        <div
          className={classNames(
            "rounded flex-1",
            isDark ? "bg-slate-700" : "bg-gray-200"
          )}
        />
      </div>
      <div
        className={classNames(
          "rounded-sm mt-6 mb-2 w-12 h-3",
          isDark ? "bg-slate-700" : "bg-gray-200"
        )}
      />
      <div
        className={classNames(
          "rounded-sm mb-2 w-full h-10",
          isDark ? "bg-slate-700" : "bg-gray-200"
        )}
      />
      <div
        className={classNames(
          "rounded-sm mt-6 mb-2 w-12 h-3",
          isDark ? "bg-slate-700" : "bg-gray-200"
        )}
      />
      <div
        className={classNames(
          "rounded-sm mb-2 w-full h-10",
          isDark ? "bg-slate-700" : "bg-gray-200"
        )}
      />
      <div
        className={classNames(
          "rounded-sm mt-6 mb-2 w-12 h-3",
          isDark ? "bg-slate-700" : "bg-gray-200"
        )}
      />
      <div
        className={classNames(
          "rounded-sm mb-2 w-full h-10",
          isDark ? "bg-slate-700" : "bg-gray-200"
        )}
      />
      <Button className="mt-8 bg-gray-700 text-sm py-3" label="Pay Now" />
    </div>
  );
};

export default PaymentBuilder;
