import React from "react";
import { THEME } from "../constants";
import { classNames } from "../helpers";
import useTheme from "../hooks/useTheme";
import Button from "./Button";
import PaymentWrapper from "./PaymentWrapper";

const WireframeBlocks = ({ isDark, wallets, shipping }) => (
  <>
    {wallets ? (
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
    ) : null}
    {shipping ? (
      <>
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
      </>
    ) : null}
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
  </>
);

const PaymentBuilder = ({ fullScreen }) => {
  const [theme] = useTheme();
  const isDark = theme.scheme === THEME.DARK;

  if (!fullScreen) {
    return (
      <div className="mt-8">
        <WireframeBlocks
          isDark={isDark}
          wallets={theme.wallets}
          shipping={theme.shipping}
        />
        <Button
          className="mt-8 text-sm py-3 w-full"
          label="Pay Now"
          style={{
            backgroundColor: theme.primaryColor,
            fontFamily: theme.fontFamily,
          }}
        />
      </div>
    );
  }

  return (
    <div className="mt-8">
      <PaymentWrapper />
    </div>
  );
};

export default PaymentBuilder;
