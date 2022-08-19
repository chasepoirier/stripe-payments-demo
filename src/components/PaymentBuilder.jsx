import React from "react";
import { THEME } from "../constants";
import { classNames } from "../helpers";
import useTheme from "../hooks/useTheme";
import Button from "./Button";
import PaymentWrapper from "./PaymentWrapper";

const WireframeBlocks = ({
  isDark,
  wallets,
  shipping,
  color,
  bgColor,
  fontFamily,
  fontSize,
  padding,
  borderRadius,
}) => (
  <>
    {wallets ? (
      <div className="flex justify-between gap-2">
        <div
          style={{
            color,
            backgroundColor: bgColor,
            padding: padding * 4,
            borderRadius,
            fontSize,
            fontFamily,
          }}
          className={classNames(
            "mb-2 w-full flex items-center font-light border",
            isDark ? "bg-slate-700" : "bg-gray-200"
          )}
        >
          -
        </div>
        <div
          style={{
            color,
            backgroundColor: bgColor,
            padding: padding * 4,
            borderRadius,
            fontSize,
            fontFamily,
          }}
          className={classNames(
            "mb-2 w-full flex items-center font-light border",
            isDark ? "bg-slate-700" : "bg-gray-200"
          )}
        >
          -
        </div>
        <div
          style={{
            color,
            backgroundColor: bgColor,
            padding: padding * 4,
            borderRadius,
            fontSize,
            fontFamily,
          }}
          className={classNames(
            "mb-2 w-full flex items-center font-light border",
            isDark ? "bg-slate-700" : "bg-gray-200"
          )}
        >
          -
        </div>
      </div>
    ) : null}

    <div
      style={{
        color,
        backgroundColor: bgColor,
        padding: padding * 4,
        borderRadius,
        fontSize,
        fontFamily,
      }}
      className={classNames(
        "mb-2 w-full flex items-center font-light border",
        isDark ? "bg-slate-700" : "bg-gray-200"
      )}
    >
      Card Number
    </div>

    <div className="flex justify-between gap-2">
      <div
        style={{
          color,
          backgroundColor: bgColor,
          padding: padding * 4,
          borderRadius,
          fontSize,
          fontFamily,
        }}
        className={classNames(
          "mb-2 w-full flex items-center font-light border",
          isDark ? "bg-slate-700" : "bg-gray-200"
        )}
      >
        Expiration
      </div>
      <div
        style={{
          color,
          backgroundColor: bgColor,
          padding: padding * 4,
          borderRadius,
          fontSize,
          fontFamily,
        }}
        className={classNames(
          "mb-2 w-full flex items-center font-light border",
          isDark ? "bg-slate-700" : "bg-gray-200"
        )}
      >
        CSV
      </div>
    </div>

    {shipping ? (
      <div className="flex justify-between gap-2">
        <div
          style={{
            color,
            backgroundColor: bgColor,
            padding: padding * 4,
            borderRadius,
            fontSize,
            fontFamily,
          }}
          className={classNames(
            "mb-2 w-full flex items-center font-light border",
            isDark ? "bg-slate-700" : "bg-gray-200"
          )}
        >
          Country
        </div>
        <div
          style={{
            color,
            backgroundColor: bgColor,
            padding: padding * 4,
            borderRadius,
            fontSize,
            fontFamily,
          }}
          className={classNames(
            "mb-2 w-full flex items-center font-light border",
            isDark ? "bg-slate-700" : "bg-gray-200"
          )}
        >
          Zip
        </div>
      </div>
    ) : null}
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
          bgColor={theme.backgroundColor}
          color={theme.textColor}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSize}
          padding={theme.spacing}
          borderRadius={theme.borderRadius}
        />
        <Button
          className="mt-8 text-sm py-3 w-full"
          label="Pay Now"
          style={{
            backgroundColor: theme.primaryColor,
            fontFamily: theme.fontFamily,
            borderRadius: theme.borderRadius,
            fontSize: theme.fontSize,
            padding: theme.spacing * 4,
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
